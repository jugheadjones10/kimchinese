const { DateTime } = require("luxon")
const { getDueWords, getUser } = require("../serverless-js/api.js")
const fisherYatesShuffle = require("../shared-js/fisher-yates.cjs")
const { Logtail } = require("@logtail/node")
const logtail = new Logtail("HhwKYiXE16QBdSJpHhLGpcXS")

module.exports = async function getData(configData) {
  const username = configData.eleventy?.serverless?.query?.username || "alice"
  try {
    const dueWordsPromise = getDueWords({
      username,
      currentTime: DateTime.utc().toISO(),
    })

    const userPromise = getUser({
      username,
    })

    const dueWords = await dueWordsPromise
    const user = await userPromise

    console.log("DUE WORDS", dueWords)
    console.log("USER", user)

    const finalWords = []

    for (let userWord of dueWords) {
      const word = userWord.word
      let arrayCopy
      if (word.examples) {
        word.examples = fisherYatesShuffle(word.examples).slice(0, 2)
        arrayCopy = [...word.examples]
      }

      const array = ["coverType", "defType", "examplesType", "examplesType"]
      // Eventually add audio type?
      console.log(word.englishDefinitions[0])
      array.forEach((type) => {
        if (
          type === "defType" &&
          word.englishDefinitions[0].includes("English definition unavailable")
        )
          return
        if (type === "coverType" && word.word.length <= 2) return
        if (type === "examplesType") {
          if (!word.examples) return
          finalWords.push({
            // The order is very important here...word and userWord both have an id property. We don't want word's id
            // to override userWord's id because userWord already has a wordId. This is confusing code. Refactor it.
            ...word,
            ...userWord,
            word: word.word,
            type: type,
            frontExample: arrayCopy.pop(),
          })
        } else {
          finalWords.push({
            ...word,
            ...userWord,
            word: word.word,
            type: type,
          })
        }
      })
    }

    console.log("Processed Words:", finalWords)

    return {
      backendEndpoint: process.env.BACKEND_ENDPOINT,
      words: fisherYatesShuffle(finalWords),
      iana: user.iana.timezone,
      error: false,
    }
  } catch (e) {
    // Just going to log to logtail straight because I don't want to integrate the winson instance used in the backend here as
    // well.
    logtail.error(e, {
      username,
    })

    return {
      error: true,
    }
  }
}
