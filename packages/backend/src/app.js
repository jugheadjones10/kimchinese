const express = require("express");
var fs = require('fs');
const path = require("path")
var log4js = require("log4js");
const { v4: uuidv4 } = require('uuid');
var util = require('util')
var cors = require('cors')

// Router
const enqueue = require("./routes/enqueue.js")

const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')

const { createBullBoard } = require('@bull-board/api')
const { BullMQAdapter } = require('@bull-board/api/bullMQAdapter')
const { ExpressAdapter } = require('@bull-board/express')
const { queue, worker } = require("./routes/queue.js")

const { PromisePool } = require("./PromisePool.js")

// DB
const { getWords } = require("../db/get-words.js")
const { scrapeAndCreateWord } = require("../db/scrape-and-create-word.js")
const { createUser } = require("../db/create-user.js")

require('dotenv').config()

puppeteer.use(StealthPlugin())

log4js.configure({
	appenders: {
		out: { type: 'stdout' },
		app: { type: 'file', filename: 'logs/logs6' }
	},
	categories: {
		default: { appenders: [ 'out' ], level: 'trace' },
		app: { appenders: ['app'], level: 'trace' }
	}
});

const logToFile = log4js.getLogger('app');


const app = express();

var cedict= JSON.parse(fs.readFileSync(path.resolve(__dirname, '../CEDICT2JSON/cedict-pretty.json'), 'utf8'))
var indexedMap = {}
cedict.forEach(x => indexedMap[x.simplified] = {
	pinyin: x.pinyin,
	definitions: x.definitions
})

//Cors allows webpack dev server at localhost:8080 to access my myanmar map API
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


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
	try {

		const reqId = uuidv4()

		console.log("req", req.body)
		const userReqWords = req.body.words
		const username = req.body?.username || "noname"
		const email = req.body.email

		// Client website uses Luxon to generate current UTC time and also to get the user's IANA timezone
		const { isoTime, IANA } = req.body

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
		return next(error)
	}

});

module.exports = app
