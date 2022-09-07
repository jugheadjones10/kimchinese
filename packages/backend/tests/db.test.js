// Stuff to mock
const prisma = require("#src/db-init")
const {
  scrapeAndReduceWords,
  reduceScrapedWords,
} = require("#src/users/scrape-and-reduce-words")
const {
  fakeNewWord,
  fakeDBReadyNewWord,
  standardUserWordProperties,
} = require("./fake-data")
const scrapedData = require("./sample-scrape-data")

const { createUserInDB, initializeUserWords } = require("#src/users/db")
const { DateTime } = require("luxon")
const logger = require("#src/logging")
const util = require("util")

const wordsToTest = ["语重心长", "现实", "实", "大家", "理所当然"]
const newWords = ["实", "大家", "理所当然"]

const fakeExistingWord = (word) => ({
  word,
  pinyin: scrapedData[word].pinyin,
  id: "randomID",
})

const reducedScrapedWords = reduceScrapedWords(scrapedData)
jest.mock("#src/db-init")
jest.mock("#src/users/scrape-and-reduce-words", () => {
  return jest.fn((words) => {
    return Promise.resolve(
      reducedScrapedWords.filter((data) => words.includes(data.word))
    )
  })
})

test("initializeUserWords only scrapes words not in the database", async () => {
  prisma.word.findUnique.mockResolvedValue(null)

  const userWords = await initializeUserWords(
    wordsToTest,
    DateTime.now().toISO()
  )

  logger.info("User Words" + userWords)
  expect(scrapeAndReduceWords.mock.calls[0][0]).toEqual(newWords)
})

test.only("initializeUserWords creates correct userWords array when given a mixture of new and existing words", async () => {
  const dateTime = DateTime.now().toISO()
  prisma.word.findUnique
    .mockResolvedValue(null)
    .mockResolvedValueOnce(fakeExistingWord("语重心长"))
    .mockResolvedValueOnce(fakeExistingWord("现实"))

  const userWords = await initializeUserWords(wordsToTest, dateTime)
  const DBify = (wordObj) => ({
    create: {
      word: wordObj.word,
      pinyin: wordObj.pinyin,
      examples: {
        create: wordObj.examples.map((example) => ({
          example,
        })),
      },
      englishDefinitions: {
        create: wordObj.englishDefinitions.map((definition) => ({
          definition,
        })),
      },
      chineseDefinitions: {
        create: wordObj.chineseDefinitions.map((definition) => ({
          definition,
        })),
      },
    },
  })
  const jsDate = DateTime.fromISO(dateTime).toJSDate()
  const expectedUserWords = [
    {
      ...standardUserWordProperties(jsDate),
      word: {
        create: DBify("实"),
      },
    },
    {
      ...standardUserWordProperties(jsDate),
      word: {
        create: fakeDBReadyNewWord("大家"),
      },
    },
    {
      ...standardUserWordProperties(jsDate),
      word: {
        create: fakeDBReadyNewWord("理所当然"),
      },
    },
    {
      ...standardUserWordProperties(jsDate),
      word: { connect: { word: "语重心长" } },
    },
    {
      ...standardUserWordProperties(jsDate),
      word: { connect: { word: "现实" } },
    },
  ]
  logger.info("ExpectedUserWords" + util.inspect(expectedUserWords))
  logger.info("User Words" + util.inspect(userWords))

  expect(userWords).toEqual(expectedUserWords)
})
