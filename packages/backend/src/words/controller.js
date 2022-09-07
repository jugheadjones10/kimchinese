const logger = require("#src/logging")
const util = require("util")
const prisma = require("../db-init")
const { getDueWordsFromDB } = require("./db")
const { DateTime } = require("luxon")

exports.getDueWords = async function getDueWords(req, res, next) {
  logger.info(`Request body:  ${util.inspect(req.body)}`)

  const { username, currentTime } = req.body

  const userResult = await prisma.user.findUnique({
    where: {
      username,
    },
  })
  if (!userResult) {
    res.status(403).json(`User with username ${username} does not exist`)
    return
  }

  // Do a join between UserWord and Word, filter UserWord by username and lt currentDate
  const dueWords = await getDueWordsFromDB(username, currentTime)

  let flattenedWords = dueWords.map((dueWord) => ({
    ...dueWord,
    word: {
      ...dueWord.word,
      examples: dueWord.word.examples.map((example) => example.example),
      chineseDefinitions: dueWord.word.chineseDefinitions.map(
        (def) => def.definition
      ),
      englishDefinitions: dueWord.word.englishDefinitions.map(
        (def) => def.definition
      ),
    },
  }))

  res.status(200).json(flattenedWords)
}

exports.updateWords = async function updateWords(req, res, next) {
  logger.info(`Request body:  ${util.inspect(req.body)}`)

  const { words } = req.body
  console.log(util.inspect(words))

  const batchUpdatePromises = []
  for (let value of Object.values(words)) {
    batchUpdatePromises.push(
      prisma.userWord.update({
        where: { id: value.id },
        data: {
          repetition: value.repetition,
          interval: value.interval,
          efactor: value.evalue,
          dueDate: DateTime.fromISO(value.dueDate).toJSDate(),
        },
      })
    )
  }

  await Promise.all(batchUpdatePromises)
  res.status(200).end()
}
