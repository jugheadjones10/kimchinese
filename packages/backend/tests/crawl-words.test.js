const crawlWords = require("#src/users/crawl-words.cjs").default
const Dataset = require("./crawlee-dataset.cjs").default
const util = require("util")
var sampleScrapeData = require("./sample-scrape-data")

jest.setTimeout(40000)
// Not sure how to close the crawlee connection after it finishes crawling
test.only("Scraping works for a set of words with different character lengths", async () => {
  // The more diverse the set of words I test here, the more confident I should be that scraping works for different kinds of
  // words
  await crawlWords(["语重心长", "现实", "实", "大家", "理所当然"])
  const dataset = await Dataset.open()

  const chineseSort = (a, b) => {
    return a.localeCompare(b)
  }

  var scrapeResults = await dataset.map((value) => {
    return value
  })
  scrapeResults = scrapeResults
    .map((scrapeResult) => {
      for (let value of Object.values(scrapeResult)) {
        if (Array.isArray(value)) {
          value.sort(chineseSort)
        }
      }
    })
    .sort((a, b) => {
      return a.word.localeCompare(b.word)
    })
  sampleScrapeData = sampleScrapeData
    .map((scrapeData) => {
      for (let value of Object.values(scrapeData)) {
        if (Array.isArray(value)) {
          value.sort(chineseSort)
        }
      }
    })
    .sort((a, b) => {
      return a.word.localeCompare(b.word)
    })

  expect(scrapeResults).toMatchObject(sampleScrapeData)
})
