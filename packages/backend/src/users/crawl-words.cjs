"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crawlee = require("crawlee");

var _default = _crawlee.Dataset;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crawlWords;
exports.examplesPage = exports.definitionsPage = void 0;

var _util = _interopRequireDefault(require("util"));

var _crawlee = require("crawlee");

var _logging = _interopRequireDefault(require("#src/logging"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const definitionsPage = "definition";
exports.definitionsPage = definitionsPage;
const examplesPage = "example";
exports.examplesPage = examplesPage;
const playwrightTimeout = 2000;

async function crawlWords(words) {
  // This doesn't seem to work
  // await purgeDefaultStorages()
  const requestObjects = [];

  for (let i = 0; i < words.length; i++) {
    _logging.default.info("Crawler loop word" + words[i]);

    const word = words[i];
    requestObjects.push({
      url: "https://hanyu.baidu.com/zici/s?wd=" + word,
      userData: {
        pageType: definitionsPage,
        word
      }
    });
    requestObjects.push({
      url: "https://hanyu.baidu.com/s?wd=" + word + "造句",
      userData: {
        pageType: examplesPage,
        word
      }
    });
  }

  const requestList = await _crawlee.RequestList.open(null, requestObjects);
  const crawler = new _crawlee.PlaywrightCrawler({
    requestList,
    launchContext: {
      launchOptions: {
        headless: true
      }
    },

    async requestHandler({
      request,
      page,
      log
    }) {
      log.info(`Processing ${request.url}...`);

      if (request.userData.pageType === definitionsPage) {
        // Visibility is required because there's a hidden html section showing "detailed" definitions for single-character words
        const chineseDefinitionsPromise = page.locator("dd p:visible").allTextContents({
          timeout: playwrightTimeout
        }).then(textContents => {
          return textContents.map(def => def.trim());
        }); // The html for single-character results and multi-character results are slightly different for pinyin.

        var pinyinPromise = page.locator("#pinyin span > b").textContent({
          timeout: playwrightTimeout
        }).then(pinyin => {
          if (pinyin[0] === "[") return pinyin.slice(1, -1).trim();
          return pinyin;
        });
        const pronounceUrlPromise = page.locator(".mp3-play").getAttribute("url", {
          timeout: playwrightTimeout
        });
        const getDataPromise = Promise.all([chineseDefinitionsPromise, pinyinPromise, pronounceUrlPromise]);

        try {
          const [chineseDefinitions, pinyin, pronounceUrl] = await getDataPromise;
          const results = {
            word: request.userData.word,
            chineseDefinitions,
            pinyin,
            pronounceUrl
          };
          log.info(_util.default.inspect(results));
          await _crawlee.Dataset.pushData(results);
        } catch (e) {
          log.warning("Could not find page elements for word: " + request.userData.word);
          await _crawlee.Dataset.pushData({
            word: request.userData.word
          });
        }
      } else if (request.userData.pageType === examplesPage) {
        const examplesPromise = page.locator(".zaoju-item .content").allTextContents({
          timeout: playwrightTimeout
        }).then(textContents => {
          return textContents.map(eg => eg.trim());
        });

        try {
          const examples = await examplesPromise;
          const results = {
            word: request.userData.word,
            examples
          };
          log.info(_util.default.inspect(results));
          await _crawlee.Dataset.pushData(results);
        } catch (e) {
          log.warning("Could not find examples for word: " + request.userData.word);
          await _crawlee.Dataset.pushData({
            word: request.userData.word
          });
        }
      }

      log.info(`${request.url} is the last page!`);
    },

    // This function is called if the page processing failed more than maxRequestRetries+1 times.
    failedRequestHandler({
      request,
      log
    }) {
      log.error(`Request ${request.url} failed too many times.`);
    }

  }); // await crawler.addRequests(requestsList)
  // Run the crawler and wait for it to finish.

  await crawler.run();
  console.log("Crawler finished.");
}
