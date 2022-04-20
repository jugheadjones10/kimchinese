const express = require('express')
const router = express.Router()
const { DateTime } = require("luxon")
const chalk = require("chalk")
const request = require("supertest");

const { queue, worker } = require("./queue.js")

router.post('/', async (req, res) => {

  const { email, username, scheduleDates } = req.body

  await Promise.all(scheduleDates.map(date => {
    console.log(chalk.black.bgGreen.bold("Scheduled date: "), date)
    console.log(chalk.black.bgYellow.bold("Delay: "), DateTime.fromISO(date).diffNow("seconds").seconds)

    //Date and username are added to display in bullboard
    return queue.add("send email", {
      to: email,
      html: `<a href="www.example.com">Here's your link</a>`,
      date,
      username
    }, 
      {
        jobId: username + date,
        delay: DateTime.fromISO(date).diffNow().toMillis() 
      })
  }))

  res.sendStatus(200)
})

// router.post("/test", (req, res) => {

//   request(req.app)
//     .post("/enqueue")
//     .send({
//       email: "mrtimer99@gmail.com",
//       username: "harry",
//       scheduleDates: [
//         DateTime.local({ zone: "Asia/Seoul" }).plus({ minutes: 1 }).toISO(), 
//         DateTime.local({ zone: "Asia/Seoul" }).plus({ minutes: 2 }).toISO(), 
//         DateTime.local({ zone: "Asia/Seoul" }).plus({ minutes: 3 }).toISO(),
//       ]
//     })
//     .expect(200)
//     .end((err, response) => {
//       if (err) throw err;
//       res.send(200)
//     });

// })

module.exports = router
