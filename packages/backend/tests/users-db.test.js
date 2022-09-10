// Stuff to mock
const prisma = require("#src/db-init")
const { scrapeAndReduceWords } = require("#users/scrape-and-reduce-words")

const { initializeUserWords } = require("#users/db")
const { DateTime } = require("luxon")
const logger = require("#src/logging")
const util = require("util")

const wordsToTest = ["语重心长", "现实", "实", "大家", "理所当然"]

const fakeExistingWord = (word) => ({
  word,
  pinyin: "random pinyin",
  id: "randomID",
})

jest.mock("#src/db-init")
jest.mock("#users/scrape-and-reduce-words")

// In these tests, I'm just testing the logic of initializeUserWords - I want it to only use Crawlee to scrape words if the words
// don't already exist in our database. initializeUserWords also returns complicated objects that adhere to the object structure
// requested by Prisma, but I don't test the validity of those object structures here because any errors will reveal themselves
// when doing integration tests with the DB (invalid object structure will result in incorrect DB operations or in Prisma throwing
// an error).
test("initializeUserWords only scrapes words not in the database (when all words are not in the database)", async () => {
  prisma.word.findUnique.mockResolvedValue(null)

  await initializeUserWords(wordsToTest, DateTime.now().toISO())

  expect(scrapeAndReduceWords.mock.calls[0][0]).toEqual(wordsToTest)
})

test("initializeUserWords only scrapes words not in the database (when some words are not in the database)", async () => {
  prisma.word.findUnique
    .mockResolvedValue(null)
    .mockResolvedValueOnce(fakeExistingWord("语重心长"))
    .mockResolvedValueOnce(fakeExistingWord("现实"))

  await initializeUserWords(wordsToTest, DateTime.now().toISO())
  expect(scrapeAndReduceWords.mock.calls[0][0]).toEqual([
    "实",
    "大家",
    "理所当然",
  ])
})

test("initializeUserWords doesn't scrape any words (when all words are already in the database)", async () => {
  prisma.word.findUnique
    .mockResolvedValueOnce(fakeExistingWord("语重心长"))
    .mockResolvedValueOnce(fakeExistingWord("现实"))
    .mockResolvedValueOnce(fakeExistingWord("实"))
    .mockResolvedValueOnce(fakeExistingWord("大家"))
    .mockResolvedValueOnce(fakeExistingWord("理所当然"))
  await initializeUserWords(wordsToTest, DateTime.now().toISO())
  expect(scrapeAndReduceWords.mock.calls.length).toBe(0)
})
