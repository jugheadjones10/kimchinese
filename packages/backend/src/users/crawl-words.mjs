import util from "util"
import { Dataset, PlaywrightCrawler, Request } from "crawlee"
import logger from "#src/logging"
export const definitionsPage = "definition"
export const examplesPage = "example"

export default async function crawlWords(words) {
  const crawler = new PlaywrightCrawler({
    launchContext: {
      launchOptions: {
        headless: true,
      },
    },
    async requestHandler({ request, page, log }) {
      log.info(`Processing ${request.url}...`)

      if (request.userData.pageType === definitionsPage) {
        // Visibility is required because there's a hidden html section showing "detailed" definitions for single-character words
        const chineseDefinitions = (
          await page.locator("dd p:visible").allTextContents()
        ).map((def) => def.trim())

        // The html for single-character results and multi-character results are slightly different for pinyin.
        var pinyin = await page.locator("#pinyin b").textContent()
        if (pinyin[0] === "[") pinyin = pinyin.slice(1, -1).trim()

        const pronounceUrl = await page.locator(".mp3-play").getAttribute("url")

        const results = {
          word: request.userData.word,
          chineseDefinitions,
          pinyin,
          pronounceUrl,
        }
        log.info(util.inspect(results))
        await Dataset.pushData(results)
      } else if (request.userData.pageType === examplesPage) {
        const examples = (
          await page.locator(".zaoju-item .content").allTextContents()
        ).map((eg) => eg.trim())

        const results = {
          word: request.userData.word,
          examples,
        }
        log.info(util.inspect(results))
        await Dataset.pushData(results)
      }

      log.info(`${request.url} is the last page!`)
    },

    // This function is called if the page processing failed more than maxRequestRetries+1 times.
    failedRequestHandler({ request, log }) {
      log.error(`Request ${request.url} failed too many times.`)
    },
  })

  const requestsList = []
  for (let i = 0; i < words.length; i++) {
    logger.info("Crawler loop word" + words[i])
    const word = words[i]
    requestsList.push(
      new Request({
        url: "https://hanyu.baidu.com/zici/s?wd=" + word,
        userData: { pageType: definitionsPage, word },
      })
    )

    requestsList.push(
      new Request({
        url: "https://hanyu.baidu.com/s?wd=" + word + "造句",
        userData: { pageType: examplesPage, word },
      })
    )
  }

  await crawler.addRequests(requestsList)
  // Run the crawler and wait for it to finish.
  await crawler.run()

  console.log("Crawler finished.")
}
