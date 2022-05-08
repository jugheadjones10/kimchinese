const fetch = require("node-fetch-commonjs")
const fs = require("fs")
const path = require("path")
const macroMetaFetch = require("./macrometa-fetch")
const { deflogger, imptlogger } = require("#src/logging")

var cedict= JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../CEDICT2JSON/cedict-pretty.json'), 'utf8'))
var indexedMap = {}
cedict.forEach(x => indexedMap[x.simplified] = {
	definitions: x.definitions
})

module.exports = async function scrapeAndCreateWord(word, browser) {
	// This takes 7s seconds for one word, which is way too long. Not sure why.

	try{

		async function setupPage(url){
			const page = await browser.newPage()
			await page.setDefaultNavigationTimeout(0);
			await page.goto(url)
			return page
		}

		const cedictEntry = indexedMap[word]
		const englishDefs = cedictEntry?.definitions || ["English definition unavailable"]

		console.time("Time to scrape pages")
		var pageDataPromise= setupPage('https://hanyu.baidu.com/zici/s?wd=' + word).then(page => {
			return page.evaluate(() => {
				return [
					document.querySelector("dd p")?.innerHTML.trim() || "Chinese definition unavailable",
					document.querySelector("#pinyin b")?.innerHTML.trim().slice(1, -1).trim() || "Pinyin unavailable"
				]
			})
		})

		var examplesPromise = setupPage('https://hanyu.baidu.com/s?wd=' + word + '造句').then(page => {
			return page.evaluate(() => {
				var examplesList = [...document.querySelectorAll(".zaoju-item p")]
				var exampleSentences = examplesList.map(x => {
					return x.innerHTML 
				})
				return exampleSentences.length === 0 ? null : exampleSentences
			})
		})

		const [pageData, examples] = await Promise.all([pageDataPromise, examplesPromise])
		const [chineseDef, pinyin] = pageData
		console.timeEnd("Time to scrape pages")

		// Let's try not doing the below. Trust that closing the browser will be enough.
		// chineseDefPagePromise.then(page => page.close())
		// examplesPagePromise.then(page => page.close())

		const body = {
			word,
			chineseDef,
			englishDefs,
			pinyin,
			examples
		}
		deflogger.debug(`Scraping results: ${JSON.stringify(body)}`)

		await macroMetaFetch("insert-word", body)

	}catch(e){
		//Silent failing of word scrape. Only log to Heroku papertrail logging service
		imptlogger.error(`Error while scraping for ${word}: `, e)
	}

}
