const express = require('express')
const router = express.Router()
const { DateTime } = require("luxon")
const chalk = require("chalk")
const { deflogger, imptlogger } = require("../logging.js")

const { queue, worker } = require("./queue.js")

router.post('/', async (req, res) => {

  const { email, username, scheduledDate } = req.body

  deflogger.debug(`
    Added job for email at: ${scheduledDate}
    Username: ${username}
    Email: ${email}
    Delay from now: ${DateTime.fromISO(scheduledDate).diffNow("seconds").seconds}
  `)

  //Date and username are added to display in bullboard
  await queue.add("send email", {
    to: email,
    html: `<a href="www.example.com">Here's your link</a>`,
    scheduledDate,
    username
  }, 
   {
     jobId: username + scheduledDate,
     delay: DateTime.fromISO(scheduledDate).diffNow().toMillis() 
   })

  res.sendStatus(200)
 
})

module.exports = router
