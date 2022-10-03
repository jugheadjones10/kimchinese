const logger = require("#src/logging")
const util = require("util")
const formSchema = require("./form-schema")
const prisma = require("../db-init")
const { validationStrings } = require("../shared.js")
const { createUserInDB } = require("./db")
const { queueNotif } = require("#queue/index")
const { DateTime } = require("luxon")

// Form handling
const readXlsxFile = require("read-excel-file/node")
const XLSX = require("xlsx")

exports.createUser = createUser
exports.getUser = getUser

async function getUser(req, res, next) {
  const username = req.params.username
  // logger.info(`Request for ${username}`)
  let result = null
  if (username) {
    result = await prisma.user.findUnique({
      where: {
        username,
      },
      include: {
        iana: true,
      },
    })
  }

  res.status(200).json(result)
}

// Add cors restrictions for this
// Is there any way to check whether a submission is made through a javascript fetch request (for example using dev tools from the
// kimchinese website) or made properly through the form?
// Possible to ensure 100%, almost mathematically, that the Joi validation is correct?
async function createUser(req, res, next) {
  logger.info(`Request body:  ${util.inspect(req.body)}`)
  logger.info(`Request file:  ${util.inspect(req.file)}`)

  const formData = req.body
  if (req.file) formData["file"] = req.file

  const { error: formError, value: formValue } = formSchema.validate(formData, {
    abortEarly: false,
  })

  formError && logger.warn(formError)
  if (formError) {
    res.status(403).json(formError)
    return
  }

  const result = await prisma.user.findUnique({
    where: {
      username: formData.username,
    },
  })
  if (result) {
    logger.warn(validationStrings.duplicateUsername)
    res.status(403).json(validationStrings.duplicateUsername)
    return
  }

  const workbook = XLSX.read(formData.file.buffer)
  const worksheet = workbook.Sheets[workbook.SheetNames[0]]

  // Make inputting words more flexible? Just get words in every single cell instead of in the first column
  const userWords = Object.keys(worksheet)
    .filter((x) => /^A\d+/.test(x))
    .map((x) => worksheet[x].v)

  logger.info("User words submitted: " + userWords)

  if (userWords.length === 0) {
    logger.warn(validationStrings.emptyFile)
    res.status(403).json(validationStrings.emptyFile)
    return
  }
  // userWords might change here depending on whether someone chooses a starter pack

  //Check for CORS?
  //Please check your network and try again whenever I come back to tab?
  try {
    const { username, contactType, email, sms, isoTime, IANA } = formData
    const [createdUser, incompleteWords] = await createUserInDB({
      username,
      contactType,
      email,
      sms,
      isoTime,
      IANA,
      userWords,
    })

    // Track the lifecycle or your isoTime values from start to finish
    console.log("SCHEDULEDDATE IN USER CONTROLLER", isoTime)
    // queueNotif needs to come after user has been completely initialized in the database because
    // it checks for all words that are due
    await queueNotif({
      scheduledDate: isoTime,
      IANA,
      username,
      contactType,
      notifInfo: formData[contactType.toLowerCase()],
    })

    logger.warn(
      "Incomplete words array in create user controller" + incompleteWords
    )
    console.log("Incomplete words controller", incompleteWords)

    res.status(200).json({ incompleteWords, createdUser })
  } catch (error) {
    logger.error("Error creating new user in database", error)
    return next(error)
  }
}
