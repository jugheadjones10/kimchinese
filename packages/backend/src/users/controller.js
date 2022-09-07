const logger = require("#src/logging")
const util = require("util")
const formSchema = require("./form-schema")
const prisma = require("../db-init")
const { validationStrings } = require("@kimchinese/shared")
const { createUserInDB } = require("./db")

// Form handling
const readXlsxFile = require("read-excel-file/node")
const XLSX = require("xlsx")

exports.createUser = createUser
exports.getUser = getUser

async function getUser(req, res, next) {
  const username = req.params.username
  logger.info(`Request for ${username} has come in`)
  const result = await prisma.user.findUnique({
    where: {
      username,
    },
    include: {
      iana: true,
    },
  })

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

  formError && logger.error(formError)
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
    res.status(403).json(validationStrings.emptyFile)
    return
  }
  // userWords might change here depending on whether someone chooses a starter pack

  //Check for CORS?
  //Please check your network and try again whenever I come back to tab?
  try {
    const { username, notif, email, sms, isoTime, IANA } = formData
    const newUser = await createUserInDB({
      username,
      notif,
      email,
      sms,
      isoTime,
      IANA,
      userWords,
    })

    // const queueNotifPromise = queueNotif({
    //   scheduledDate: isoTime,
    //   IANA,
    //   username,
    //   notif,
    //   notifChannels,
    // })

    // await Promise.all([scrapeAndCreatePromisePool.start(), createUserPromise])
    // await browser.close()

    res.status(200).end()
  } catch (error) {
    logger.error("Error handling /hydrate-words POST request: ", error)
    return next(error)
  }
}
