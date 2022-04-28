require('dotenv').config()
const getWords = require('../db/get-words.js');
const createUser = require('../db/create-user.js');
const macroMetaFetch = require("../db/macrometa-fetch.js")

test('GET all words', async () => {
  const words = await getWords()
  expect(words).toBeTruthy()
  expect(words.length).toBeGreaterThan(0)
  console.log("Number of words: ", words.length)
});

test('GET all words fails correctly', async () => {
  expect.assertions(1);
  try {
    const words = await getWords("wrongquery")
    await process.nextTick(() => {})
  } catch (e) {
    console.log("GET words error: ", e)
    expect(e).toMatch('MacroMeta fetch returned error for query:');
  }
});

test('CREATE user', async () => {
  const testUsername = "testuser"
  await createUser({
    userReqWords: ["语重心长", "狂风暴雨", "座无虚席"], 
    username: testUsername,
    isoTime: "isotime", 
    IANA: "iana",
    email: "test@email.com"
  })

  const { username, _key } = (await macroMetaFetch("get-user", { username: testUsername }))[0]
  expect(username).toBe(testUsername)
  
  //Cleanup
  await macroMetaFetch("remove-user", { _key })

});
