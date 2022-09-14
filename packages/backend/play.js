// var { scrapeAndReduceWords } = require("#users/scrape-and-reduce-words")
// var { initializedUserWords } = require("#users/db")



// Remember to add back @kimchinese/shared: * depedency back to package.json
require("dotenv").config()
const crawlWords = require("./src/users/crawl-words.cjs").default
async function hey() {
  await crawlWords([
    "百里挑一",
    "满腹经纶",
    "簪缨世族",
  ])

  // console.log("ScrapedWords", scrapedWords)
  // console.log("incompelte words", incompleteWords)
}
hey()
