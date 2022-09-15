import util from "util"
import {
  Dataset,
  PlaywrightCrawler,
  Request,
  RequestList,
  purgeDefaultStorages,
} from "crawlee"
import logger from "#src/logging"
export const definitionsPage = "definition"
export const examplesPage = "example"

const playwrightTimeout = 2000
export default async function crawlWords(words) {
  const scrapeResults = []
  // This doesn't seem to work
  // await purgeDefaultStorages()
  const requestObjects = []
  for (let i = 0; i < words.length; i++) {
    logger.info("Crawler loop word" + words[i])
    const word = words[i]
    requestObjects.push({
      url: "https://hanyu.baidu.com/zici/s?wd=" + word,
      userData: { pageType: definitionsPage, word },
    })

    requestObjects.push({
      url: "https://hanyu.baidu.com/s?wd=" + word + "造句",
      userData: { pageType: examplesPage, word },
    })
  }
  const requestList = await RequestList.open(null, requestObjects)

  const crawler = new PlaywrightCrawler({
    requestList,
    launchContext: {
      launchOptions: {
        headless: true,
      },
    },
    async requestHandler({ request, page, log }) {
      log.info(`Processing ${request.url}...`)

      if (request.userData.pageType === definitionsPage) {
        // Visibility is required because there's a hidden html section showing "detailed" definitions for single-character words
        const chineseDefinitionsPromise = page
          .locator("dd p:visible")
          .allTextContents({ timeout: playwrightTimeout })
          .then((textContents) => {
            return textContents.map((def) => def.trim())
          })
        // The html for single-character results and multi-character results are slightly different for pinyin.
        var pinyinPromise = page
          .locator("#pinyin span > b")
          .textContent({ timeout: playwrightTimeout })
          .then((pinyin) => {
            if (pinyin[0] === "[") return pinyin.slice(1, -1).trim()
            return pinyin
          })

        const pronounceUrlPromise = page
          .locator(".mp3-play")
          .getAttribute("url", { timeout: playwrightTimeout })

        const getDataPromise = Promise.all([
          chineseDefinitionsPromise,
          pinyinPromise,
          pronounceUrlPromise,
        ])

        try {
          const [chineseDefinitions, pinyin, pronounceUrl] =
            await getDataPromise
          const results = {
            word: request.userData.word,
            chineseDefinitions,
            pinyin,
            pronounceUrl,
          }
          log.info(util.inspect(results))
          // await Dataset.pushData(results)
          scrapeResults.push(results)
        } catch (e) {
          log.warning(
            "Could not find page elements for word: " + request.userData.word
          )
          // await Dataset.pushData({
          //   word: request.userData.word,
          // })
          scrapeResults.push({
            word: request.userData.word,
          })
        }
      } else if (request.userData.pageType === examplesPage) {
        const examplesPromise = page
          .locator(".zaoju-item .content")
          .allTextContents({ timeout: playwrightTimeout })
          .then((textContents) => {
            return textContents.map((eg) => eg.trim())
          })

        try {
          const examples = await examplesPromise
          const results = {
            word: request.userData.word,
            examples,
          }
          log.info(util.inspect(results))
          // await Dataset.pushData(results)
          scrapeResults.push(results)
        } catch (e) {
          log.warning(
            "Could not find examples for word: " + request.userData.word
          )
          // await Dataset.pushData({
          //   word: request.userData.word,
          // })
          scrapeResults.push({
            word: request.userData.word,
          })
        }
      }

      log.info(`${request.url} is the last page!`)
    },

    // This function is called if the page processing failed more than maxRequestRetries+1 times.
    failedRequestHandler({ request, log }) {
      log.error(`Request ${request.url} failed too many times.`)
    },
  })

  // await crawler.addRequests(requestsList)

  // Run the crawler and wait for it to finish.
  await crawler.run()

  console.log("Crawler finished.")
  return scrapeResults
}
