const prisma = require("#src/db-init")
const { scrapeAndReduceWords } = require("./scrape-and-reduce-words")
const logger = require("#src/logging")
const { DateTime } = require("luxon")
const util = require("util")

exports.createUserInDB = async function createUserInDB({
  username,
  notif,
  email,
  sms,
  isoTime,
  IANA,
  userWords,
}) {
  const initializedUserWords = await initializeUserWords(userWords, isoTime)
  logger.info(
    "The initializedUserWords" +
      util.inspect(initializedUserWords, { depth: 6 })
  )

  const newUser = {
    data: {
      username,
      iana: {
        connectOrCreate: {
          where: { timezone: IANA },
          create: { timezone: IANA },
        },
      },
      userWords: { create: initializedUserWords },
    },
  }

  if (notif === "email") {
    newUser.data.contactType = "EMAIL"
    newUser.data.email = email
  } else if (notif === "sms") {
    newUser.data.contactType = "SMS"
    newUser.data.sms = sms
  }

  return prisma.user.create(newUser)
}

exports.initializeUserWords = initializeUserWords
function initializeUserWords(userWords, isoTime) {
  const wordsToScrape = []
  const foundWords = {}
  const checkWordExistencePromises = []

  for (let i = 0; i < userWords.length; i++) {
    const word = userWords[i]
    checkWordExistencePromises.push(
      prisma.word.findUnique({ where: { word } }).then((wordResult) => {
        if (!wordResult) {
          wordsToScrape.push(word)
        } else {
          wordResult.didExist = true
          foundWords[word] = wordResult
        }
      })
    )
  }

  return Promise.all(checkWordExistencePromises)
    .then(() =>
      wordsToScrape.length > 0 ? scrapeAndReduceWords(wordsToScrape) : {}
    )
    .then((scrapedWords) => {
      const combinedWords = { ...foundWords, ...scrapedWords }

      return Object.entries(combinedWords).map(([key, wordObj]) => {
        return {
          repetition: 0,
          interval: 0,
          efactor: 2.5,
          dueDate: DateTime.fromISO(isoTime).toJSDate(),
          word: wordObj.didExist
            ? {
                connect: { word: wordObj.word },
              }
            : {
                create: {
                  word: wordObj.word,
                  pronounceUrl: wordObj.pronounceUrl,
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
              },
        }
      })
    })
}
