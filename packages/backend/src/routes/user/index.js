const express = require('express')
const router = express.Router()
const util = require("util")
const fs = require("fs")
const path = require("path")
const Joi = require('joi')
const { validationStrings } = require("@kimchinese/shared")

// Logging
const { deflogger, imptlogger } = require("#src/logging")

// DB
const getWords = require("#db/get-words")
const scrapeAndCreateWord = require("#db/scrape-and-create-word")
const createUser = require("#db/create-user")
const macroMetaFetch = require("#db/macrometa-fetch")

const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const { PromisePool } = require("#src/PromisePool")

// Queue
const queueNotif = require("#routes/queue/queue-notif")

// From handling
const readXlsxFile = require('read-excel-file/node')
const XLSX = require("xlsx")
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
		console.log(req.body)
		console.log(file.originalname)
		// I'm assuming that I won't be unlucky enough to have two people choose the same username AND have the same filename submit
		// the form at the same time.
    cb(null, file.originalname + req.body.username)
  }
})
const upload = multer({ storage })

// require('dotenv').config();
// const mysql = require('mysql2');
// const connection = mysql.createConnection(process.env.DATABASE_URL);
// console.log('Connected to PlanetScale!');
// connection.end();

puppeteer.use(StealthPlugin())

// Validate request object shape, return error if not correct
// Display client side response for errors, implement, spinner on submit button, display success and link for success
// What exactly does express cors() middleware do?

const formSchema = Joi.object({
  username: Joi.string().alphanum().required().messages({
    "any.required": validationStrings.missingUsername,
    "string.alphanum": validationStrings.invalidUsername
  }),
  "vocab-source": Joi.string().valid("excel", "starter").required().messages({
    "any.only": validationStrings.invalidVocabSource,
    "any.required": validationStrings.missingVocabSource
  }),
  "starter-pack": Joi.array().items(Joi.string().valid('hsk1', 'hsk2', 'hsk3', 'hsk4', 'hsk5', 'hsk6'))
    .when("vocab-source", { is: "starter", then: Joi.required()}).messages({
      "array.base": validationStrings.invalidStarterPackFormat,
      "array.includes": validationStrings.invalidStarterPackValues,
      "any.required": validationStrings.missingStarter
    }),
  file: Joi.object({
    mimetype: Joi.string().valid("application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "text/csv").required()
    .messages({
      "any.only": validationStrings.invalidFileType
    }),
    fieldname: Joi.string().valid("excel-file").required()
  }).unknown().when("vocab-source", { is: "excel", then: Joi.required()}).messages({
    "any.required": validationStrings.missingFile
  }),
  notif: Joi.string().valid("email", "sms").required().messages({
    "any.only": validationStrings.invalidNotifValue,
    "any.required": validationStrings.missingNotif
  }),
  email: Joi.string().email({ minDomainSegments: 1}).when("notif", { is: "email", then: Joi.required() }).messages({
    "string.email": validationStrings.invalidEmail,
    "any.required": validationStrings.missingEmail
  }),
  sms: Joi.string().pattern(/^\+(?:[0-9] ?){6,14}[0-9]$/).when("notif", { is: "sms", then: Joi.required() }).messages({
    "string.pattern.base": validationStrings.invalidPhone,
    "any.required": validationStrings.missingPhone
  }),
  isoTime: Joi.string().isoDate().required().messages({
    "string.isoDate": validationStrings.invalidIsoDate,
    "any.required": validationStrings.missingIsoDate
  }),
  IANA: Joi.string().required().messages({
    "any.required": validationStrings.missingIANA
  })
})
  .xor('email', 'sms')
  .xor('starter-pack', 'file')
  .required()

router.post('/', upload.single("excel-file"), async function (req, res, next) {

  deflogger.debug("Request Body", util.inspect(req.body))
  deflogger.debug("File", util.inspect(req.file))

  const formData = req.body
  if(req.file) formData["file"] = req.file

  const { error: formError, value: formValue } = formSchema.validate(formData, { abortEarly: false })
  deflogger.debug("Form Error", util.inspect(formError))
  deflogger.debug("Form Value", util.inspect(formValue))

  if(formError) {
    res.status(403).json(formError)
    return
  }

  const result = await macroMetaFetch("check-username", {
    username: formValue.username,
  })
  const usernameExists = result[0] !== undefined
  if(usernameExists) {
    res.status(403).json(validationStrings.duplicateUsername)
    return
  }

  const filePath = path.resolve(__dirname, '../../../uploads/' + formValue.file.originalname + formValue.username)
  const workbook = XLSX.readFile(filePath)
  const worksheet = workbook.Sheets[workbook.SheetNames[0]]

  const columnA = Object.keys(worksheet).filter(x => /^A\d+/.test(x)).map(x => worksheet[x].v)
  console.log("Column A", columnA)

  fs.unlinkSync(filePath)
  if(columnA.length === 0){
    res.status(403).json("Excel file is empty")
    return
  }

  //Check for CORS?
  //Please check your network and try again whenever I come back to tab?
  try {

    const { username, notif, isoTime, IANA } = formValue

    deflogger.debug(`Attempting to create user: 
      username: ${username}
      notif-method: ${notif}
      words: ${columnA}
    `)

    const browser = await puppeteer.launch({ 
      headless: true, 
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })

    const notifChannels = {
      email: formValue?.email,
      sms: formValue?.sms
    }
    const createUserPromise = createUser({ userReqWords: columnA, username, isoTime, IANA, notif, notifChannels })

    // Get all words in the database to check against the user's words list
    const words = await getWords()

    const wordMap = {}
    words.forEach(word => {
      wordMap[word.word] = word
    })

    // If word is not in database, it means I haven't scraped it before. Scrape these and add to database.
    // const scrapingQueue = []
    function *wordScrapeGenerator(){
      for(let word of columnA){
        if(!wordMap[word]){
          yield scrapeAndCreateWord(word, browser)		
        }
      }
    }

    const scrapeAndCreatePromisePool = new PromisePool(wordScrapeGenerator(), 5)

    const queueNotifPromise = queueNotif({ scheduledDate: isoTime, IANA, username, notif, notifChannels })

    await Promise.all([scrapeAndCreatePromisePool.start(), createUserPromise])
    await browser.close()

    res.status(200)

  } catch(error){
    imptlogger.error("Error handling /hydrate-words POST request: ", error)
    return next(error)
  }

})

router.use((err, req, res, next) => {
  if(err instanceof multer.MulterError) {
    if(err.code === "LIMIT_UNEXPECTED_FILE"){
      res.status(403).json(validationStrings.invalidFileInputName)
    }else{
      res.status(403).json(err)
    }
  }else{
    res.status(500).json({ error: err })
  }
})

module.exports = router
