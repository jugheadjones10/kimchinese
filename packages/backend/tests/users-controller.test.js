const request = require("supertest")
const express = require("express")
const util = require("util")
const { DateTime } = require("luxon")
const { validationStrings } = require("@kimchinese/shared")

const logger = require("#src/logging")

let server, app

const formFields = {
  username: "dan",
  "vocab-source": "excel",
  contactType: "EMAIL",
  email: "kimyoungjin1001@gmail.com",
  isoTime: DateTime.now().toISO(),
  IANA: "Asia/Seoul",
}
const wordsListExcel = "src/utils/few.csv"
const emptyExcel = "src/utils/empty.csv"

beforeAll(async () => {
  app = express()
  // app.use(cors())
  // app.use(express.json())
  app.use("/api", require("#users/router"))

  await new Promise((resolve, reject) => {
    server = app.listen(8000, () => {
      console.log("Example app listening on port 8000!")
      resolve()
    })
  })
})

test("/api/users returns error on wrong form input", (done) => {
  const modifiedFormFields = { ...formFields, contactType: "SMS" }

  request(app)
    .post("/api/user")
    .field(modifiedFormFields)
    .attach("excel-file", wordsListExcel)
    .expect(403)
    .then((response) => {
      expect(response.body.details[0].message).toBe(
        validationStrings.missingPhone
      )
      done()
    })
    .catch((err) => done(err))
})

test("/api/users returns error on duplicate username", (done) => {
  const modifiedFormFields = { ...formFields, username: "alice" }

  request(app)
    .post("/api/user")
    .field(modifiedFormFields)
    .attach("excel-file", wordsListExcel)
    .expect(403)
    .then((response) => {
      expect(response.body).toBe(validationStrings.duplicateUsername)
      done()
    })
    .catch((err) => done(err))
})

test("/api/users returns error on empty excel file", (done) => {
  request(app)
    .post("/api/user")
    .field(formFields)
    .attach("excel-file", emptyExcel)
    .expect(403)
    .then((response) => {
      expect(response.body).toBe(validationStrings.emptyFile)
      done()
    })
    .catch((err) => done(err))
})

// jest.setTimeout(30000)
// Write full docker-compliant test?
// Write some integration tests
// test.only("CORRECT", (done) => {
//   request(app)
//     .post("/api/user")
//     .field(formFields)
//     .attach("excel-file", wordsListExcel)
//     .expect(200)
//     .then((response) => {
//       // expect(response.body).toBe(validationStrings.emptyFile)
//       done()
//     })
//     .catch((err) => done(err))
// })

afterAll(async () => {
  await new Promise((resolve, reject) => {
    server.close((e) => {
      if (e) reject(e)
      resolve()
    })
  })
})
