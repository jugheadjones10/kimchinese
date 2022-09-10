var { scrapeAndReduceWords } = require("#users/scrape-and-reduce-words")
var { initializedUserWords } = require("#users/db")
async function hey() {
  const { scrapedWords, incompleteWords } = await scrapeAndReduceWords([
    "百里挑一",
    "满腹经纶",
    "簪缨世族",
  ])

  console.log("ScrapedWords", scrapedWords)
  console.log("incompelte words", incompleteWords)
}
hey()
