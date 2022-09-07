const fs = require("fs")
const path = require("path")
const logger = require("#src/logging")
const crawlWords = require("./crawl-words.cjs").default
const Dataset = require("../../tests/crawlee-dataset.cjs").default
const util = require("util")

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

async function scrapeAndReduceWords(words) {
  await crawlWords(words)
  const dataset = await Dataset.open()
  return reduceScrapedWords(dataset)
}

async function reduceScrapedWords(dataset) {
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
