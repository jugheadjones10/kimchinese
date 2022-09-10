const crawlWords = require("#users/crawl-words.cjs").default
// Need to transpile crawlee's Dataset module to cjs because using Jest's experimental vm modules option results in an obscure bug
const Dataset = require("./crawlee-dataset.cjs").default
var sampleScrapeData = require("./sample-scrape-data")
var { scrapeAndReduceWords } = require("#users/scrape-and-reduce-words")

jest.setTimeout(40000)
// Not sure how to close the crawlee connection after it finishes crawling
test("Scraping works for a set of words with different character lengths", async () => {
  // The more diverse the set of words I test here, the more confident I should be that scraping works for different kinds of
  // words
  await crawlWords(["语重心长", "现实", "实", "大家", "理所当然"])
  const dataset = await Dataset.open()

  const chineseSort = (a, b) => {
    return a.localeCompare(b)
  }

  // There doesn't seem to be an API in Crawlee that lets me directly get an array of the scrape results yet. Hence the weird map.
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

test("Scraping works for a set of words with different character lengths", async () => {
  // The more diverse the set of words I test here, the more confident I should be that scraping works for different kinds of
  // words
  //
  await crawlWords(["百里挑一", "满腹经纶", "簪缨世族"])
  const dataset = await Dataset.open()

  await dataset.forEach(async (item, index) => {
    console.log(`Item at ${index}: ${JSON.stringify(item)}`)
  })
})

test.only("Scraping works for a set of words with different character lengths", async () => {
  // The more diverse the set of words I test here, the more confident I should be that scraping works for different kinds of
  // words
  //
  const { scrapedWords, incompleteWords } = await scrapeAndReduceWords([
    "语重心长",
    "百里挑一",
    "满腹经纶",
    "簪缨世族",
  ])

  console.log("ScrapedWords", scrapedWords)
  console.log("incompelte words", incompleteWords)
})
