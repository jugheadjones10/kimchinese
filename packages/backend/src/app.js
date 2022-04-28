const express = require("express");
const fs = require('fs');
const path = require("path")
const { v4: uuidv4 } = require('uuid');
const util = require('util')
const cors = require('cors')
const chalk = require("chalk")

const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const { PromisePool } = require("./PromisePool.js")

// Routes
const enqueue = require("./routes/enqueue.js")

// Logging
const { deflogger, imptlogger } = require("./logging.js")

// Bullboard UI
const { createBullBoard } = require('@bull-board/api')
const { BullMQAdapter } = require('@bull-board/api/bullMQAdapter')
const { ExpressAdapter } = require('@bull-board/express')
const { queue, worker } = require("./routes/queue.js")

// DB
const getWords = require("../db/get-words.js")
const scrapeAndCreateWord = require("../db/scrape-and-create-word.js")
const createUser = require("../db/create-user.js")

puppeteer.use(StealthPlugin())

var cedict= JSON.parse(fs.readFileSync(path.resolve(__dirname, '../CEDICT2JSON/cedict-pretty.json'), 'utf8'))
var indexedMap = {}
cedict.forEach(x => indexedMap[x.simplified] = {
	pinyin: x.pinyin,
	definitions: x.definitions
})

const app = express();
app.use(cors());
app.use(express.json());

// Bullboard
const serverAdapter = new ExpressAdapter();
const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
  queues: [
    new BullMQAdapter(queue),
  ],
  serverAdapter: serverAdapter
})
serverAdapter.setBasePath('/admin/queues')
app.use('/admin/queues', serverAdapter.getRouter())

app.use("/enqueue", enqueue)



app.post("/hydrate-words", async function (req, res, next) {

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

});

module.exports = app
