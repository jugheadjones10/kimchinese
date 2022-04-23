const express = require('express')
const router = express.Router()
const { DateTime } = require("luxon")
const chalk = require("chalk")
const { deflogger, imptlogger } = require("../logging.js")

const { queue, worker } = require("./queue.js")

router.post('/', async (req, res) => {

  const { email, username, scheduleDates } = req.body

  await Promise.all(scheduleDates.map(date => {

    deflogger.debug(`
      Added job for email at: ${date}
      Username: ${username}
      Email: ${email}
      Delay from now: ${DateTime.fromISO(date).diffNow("seconds").seconds}
    `)

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

module.exports = router
