const fetch = require("node-fetch")
const fs = require("fs")
const path = require("path")
const macroMetaFetch = require("./macrometa-fetch")
const logger = require("#src/logging")

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

async function setupPage(url, browser) {
  const page = await browser.newPage()
  await page.setDefaultNavigationTimeout(0)
  await page.goto(url)
  return page
}

module.exports = async function scrapeAndCreateWords(words) {















  // This takes 7s seconds for one word, which is way too long. Not sure why.

  const cedictWord = cedictWords[word]
  const englishDefs = cedictWord?.definitions || [
    "English definition unavailable",
  ]

  console.time("Time to scrape pages")

  const browser = await browserPromise
  var pageDataPromise = setupPage(
    "https://hanyu.baidu.com/zici/s?wd=" + word,
    browser
  ).then((page) => {
    return page.evaluate(() => {
      return [
        document.querySelector("dd p")?.innerHTML.trim() ||
          "Chinese definition unavailable",
        document
          .querySelector("#pinyin b")
          ?.innerHTML.trim()
          .slice(1, -1)
          .trim() || "Pinyin unavailable",
      ]
    })
  })

  var examplesPromise = setupPage(
    "https://hanyu.baidu.com/s?wd=" + word + "造句",
    browser
  ).then((page) => {
    return page.evaluate(() => {
      var examplesList = [...document.querySelectorAll(".zaoju-item p")]
      var exampleSentences = examplesList.map((x) => {
        return x.innerHTML
      })
      return exampleSentences.length === 0 ? null : exampleSentences
    })
  })

  const [pageData, examples] = await Promise.all([
    pageDataPromise,
    examplesPromise,
  ])
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
    examples,
  }
  deflogger.debug(`Scraping results: ${JSON.stringify(body)}`)

  await macroMetaFetch("insert-word", body)
}
