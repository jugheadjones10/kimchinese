const { getDueWordsFromDB } = require("#src/words/db")

test("Hey", async () => {
  await getDueWordsFromDB()
})
