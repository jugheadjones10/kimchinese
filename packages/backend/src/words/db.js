const { DateTime } = require("luxon")
const util = require("util")
const prisma = require("../db-init")
const logger = require("#src/logging")

exports.getDueWordsFromDB = function getDueWordsFromDB(username, currentTime) {
  return prisma.userWord.findMany({
    where: {
      user: {
        is: { username },
      },
      dueDate: {
        lte: currentTime,
      },
    },
    include: {
      word: {
        include: {
          examples: true,
          chineseDefinitions: true,
          englishDefinitions: true,
        },
      },
    },
  })
}

exports.checkIf
