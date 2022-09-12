const fs = require("fs")
const path = require("path")
const logger = require("#src/logging")
const crawlWords = require("./crawl-words.cjs").default
const Dataset = require("../../tests/crawlee-dataset.cjs").default
const util = require("util")
const Joi = require("joi")

var cedict = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, "../../CEDICT2JSON/cedict-pretty.json"),
    "utf8"
  )
)

var cedictWords = {}
for (let word of cedict) {
  cedictWords[word.simplified] = {
    definitions: word.definitions,
  }
}

const wordSchema = Joi.object({
  word: Joi.string().required(),
  examples: Joi.array().items(Joi.string()).min(1),
  chineseDefinitions: Joi.array().items(Joi.string()).min(1),
  englishDefinitions: Joi.array().items(Joi.string()).min(1),
  pinyin: Joi.string().required(),
  pronounceUrl: Joi.string(),
})

async function scrapeAndReduceWords(words) {
  console.log("ScrapeAndreduceWords", words)

  // This is necessary because Crawlee returns everything in its storage, even data from past runs, when using Dataset.open().
  // Somewhere in the docs it says that a purge only occurs once during a session? So I guess I need to do it manually.

  // Need to make sure the storage directory has been initialized before trying to open it with Dataset. If not Dataset throws an
  // error.
  // const dataset = await Dataset.open()
  // await dataset.drop()
  await crawlWords(words)

  return reduceScrapedWords()
    .then((scrapedWords) => {
      // Need to drop the dataset here because otherwise dataset.reduce will return ALL words that have been scraped before
      // even though we only want the ones that have been newly scraped.
      console.log("Scraped words here", scrapedWords)

      return scrapedWords
    })
    .then((scrapedWords) => {
      console.log("The scraepd words", scrapedWords)
      //For some reason Crawlee doesn't process scrapes that have been performed before, even though the Dataset was dropped
      const incompleteWords = []

      for (const [key, value] of Object.entries(scrapedWords)) {
        const { error, _ } = wordSchema.validate(value)
        if (error) {
          incompleteWords.push(key)
          delete scrapedWords[key]
        }
      }
      console.log("Incomplete words in scrape and reduce", incompleteWords)
      logger.warn(
        "Incomplete words array in scrape-and-reduce:" + incompleteWords
      )

      return {
        scrapedWords,
        incompleteWords,
      }
    })
}

async function reduceScrapedWords() {
  const dataset = await Dataset.open()
  const wordResults = dataset.reduce((memo, value) => {
    memo[value.word] = {
      ...memo[value.word],
      ...value,
    }
    if (!memo[value.word].englishDefinitions) {
      const cedictWord = cedictWords[value.word]
      memo[value.word].englishDefinitions = cedictWord?.definitions || [
        "English definition unavailable",
      ]
    }

    return memo
  }, {})

  return wordResults
}

module.exports = {
  scrapeAndReduceWords,
  reduceScrapedWords,
}
