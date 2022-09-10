const prisma = require("#src/db-init")
const { scrapeAndReduceWords } = require("./scrape-and-reduce-words")
const logger = require("#src/logging")
const { DateTime } = require("luxon")
const util = require("util")

exports.createUserInDB = async function createUserInDB({
  username,
  contactType,
  email,
  sms,
  isoTime,
  IANA,
  userWords,
}) {
  const { initializedUserWords, incompleteWords } = await initializeUserWords(
    userWords,
    isoTime
  )
  logger.info(
    "The initializedUserWords" +
      util.inspect(initializedUserWords, { depth: 6 })
  )
  logger.info("The incompleteWords" + util.inspect(incompleteWords))

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

  newUser.data.contactType = contactType
  newUser.data[contactType.toLowerCase()] =
    arguments[0][contactType.toLowerCase()]

  return Promise.all([
    prisma.user.create(newUser),
    Promise.resolve(incompleteWords),
  ])
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
        console.log("Word result: ", wordResult)
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
    .then(() => {
      console.log("Found words array", util.inspect(foundWords, { depth: 6 }))
      // Remember to test case when there are no wordsToScrape
      return wordsToScrape.length > 0 ? scrapeAndReduceWords(wordsToScrape) : {}
    })
    .then(({ scrapedWords, incompleteWords = [] }) => {
      const combinedWords = { ...foundWords, ...scrapedWords }
      console.log("COMBINED WORDS", combinedWords)
      console.log("Incomplete words in db", incompleteWords)

      return {
        initializedUserWords: Object.entries(combinedWords).map(
          ([key, wordObj]) => {
            console.log("We're looping through wordOBjs now: ", wordObj)
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
                        create: wordObj.englishDefinitions.map(
                          (definition) => ({
                            definition,
                          })
                        ),
                      },
                      chineseDefinitions: {
                        create: wordObj.chineseDefinitions.map(
                          (definition) => ({
                            definition,
                          })
                        ),
                      },
                    },
                  },
            }
          }
        ),
        incompleteWords,
      }
    })
}
