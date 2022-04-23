const scrapeAndCreateWord = require('../db/scrape-and-create-word.js');
const macroMetaFetch = require("../db/macrometa-fetch.js")
require('dotenv').config()

// Apparently jest-puppeteer doesn't support plugins
// const StealthPlugin = require('puppeteer-extra-plugin-stealth')
// puppeteer.use(StealthPlugin())

// What to test - correct output for word that exists in baidu and cedict
// Correct output for word that doesn't exist in both

test('scrape and create word', async () => {
  const testWord = "语重心长"
  await scrapeAndCreateWord(testWord, browser)

  const { chineseDef, englishDefs, examples, pinyin, word, _key } = (await macroMetaFetch("get-word", { word: testWord }))[0]
  console.log("KEY", _key)
  expect(word).toBe(testWord)
  expect(chineseDef).toBe("言辞诚恳，情意深长。［近］苦口婆心。")
  expect(englishDefs).toEqual(["meaningful and heartfelt words (idiom); sincere and earnest wishes"])
  expect(examples).toHaveLength(20)
  expect(pinyin).toBe("yǔ zhòng xīn cháng")
  
  //Cleanup
  await macroMetaFetch("remove-word", { _key })

});

test('unscrapable word gives correct output', async () => {
  const testWord = "tom"
  await scrapeAndCreateWord(testWord, browser)

  const { chineseDef, englishDefs, examples, pinyin, word, _key } = (await macroMetaFetch("get-word", { word: testWord }))[0]
  console.log("KEY", _key)
  expect(word).toBe(testWord)
  expect(chineseDef).toBe("Chinese definition unavailable")
  expect(englishDefs).toEqual(["English definition unavailable"])
  expect(examples).toBeNull()
  expect(pinyin).toBe("Pinyin unavailable")
  
  //Cleanup
  await macroMetaFetch("remove-word", { _key })

});
