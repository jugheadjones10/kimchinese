const express = require('express')
const router = express.Router()

// Logging
const { deflogger, imptlogger } = require("#src/logging")

// DB
const getWords = require("#db/get-words")
const scrapeAndCreateWord = require("#db/scrape-and-create-word")
const createUser = require("#db/create-user")

const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const { PromisePool } = require("#src/PromisePool")

puppeteer.use(StealthPlugin())

router.post('/', async function (req, res, next) {

	deflogger.debug(`Received /hydrate-words POST req: ${req.body}!`)

	try {

		const userReqWords = req.body.words
		const username = req.body?.username || "noname"
		const email = req.body.email

		// Client website uses Luxon to generate current UTC time and also to get the user's IANA timezone
		const { isoTime, IANA } = req.body

		deflogger.debug(`Attempting to create user: 
			username: ${username}
			email: ${email}
			words: ${userReqWords}
		`)

		const browser = await puppeteer.launch({ 
			headless: true, 
			args: ['--no-sandbox', '--disable-setuid-sandbox']
		})

		const createUserPromise = createUser(userReqWords, username, isoTime, IANA, email)

		// Get all words in the database to check against the user's words list
		const words = await getWords()

		const wordMap = {}
		words.forEach(word => {
			wordMap[word.word] = word
		})

		// If word is not in database, it means I haven't scraped it before. Scrape these and add to database.
		// const scrapingQueue = []
		function *wordScrapeGenerator(){
			for(let word of userReqWords){
				if(!wordMap[word]){
					yield scrapeAndCreateWord(word, browser)		
				}
			}
		}

		const scrapeAndCreatePromisePool = new PromisePool(wordScrapeGenerator(), 5)

		await Promise.all([scrapeAndCreatePromisePool.start(), createUserPromise])
		await browser.close()

		res.status(200)

	} catch(error){
		imptlogger.error("Error handling /hydrate-words POST request: ", error)
		return next(error)
	}

})

module.exports = router
