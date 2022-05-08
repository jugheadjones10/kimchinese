require('dotenv').config()
var { DateTime } = require("luxon")
const getWords = require('#db/get-words');
const createUser = require('#db/create-user');
const macroMetaFetch = require("#db/macrometa-fetch")

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

describe("CREATE user", () => {

  let userKey

  test.only('CREATE user', async () => {
    const userObj = {
      username : "kim",
      userReqWords : ["语重心长", "狂风暴雨", "座无虚席"] ,
      isoTime : DateTime.utc().toISO(),
      IANA : "Asia/Seoul",
      email : "kimyoungjin1001@gmail.com"
    }

    await createUser(userObj)

    const { username, words, IANA, email, _key } = (await macroMetaFetch("get-user", { username: userObj.username }))[0]

    userKey = _key

    expect(username).toBe(userObj.username)
    expect(IANA).toBe(userObj.IANA)
    expect(email).toBe(userObj.email)
    expect(words).toEqual([
      {
        word: "语重心长",
        repetition: 0,
        interval: 0,
        efactor: 2.5,
        dueDate: userObj.isoTime 
      },
      {
        word: "狂风暴雨",
        repetition: 0,
        interval: 0,
        efactor: 2.5,
        dueDate: userObj.isoTime
      },
      {
        word: "座无虚席",
        repetition: 0,
        interval: 0,
        efactor: 2.5,
        dueDate: userObj.isoTime
      }
    ])
  });

  afterAll(async () => {
    await macroMetaFetch("remove-user", { _key: userKey })
  })

})
