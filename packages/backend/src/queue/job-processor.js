const { getDueWordsFromDB } = require("#words/db")
const { sendEmail, sendSMS } = require("./send-notif.js")
const { DateTime } = require("luxon")
const queueNotif = require("./queue-notif")

module.exports = async function jobProcessor(job) {
  const { scheduledDate, IANA, username, contactType, notifInfo } = job.data

  // Enqueue new job for start of next day
  // Need to use user's timezone in order to find out what time the start of his tomorrow is.
  //
  // Do I need the toUTC() below?
  const nextDay = DateTime.fromISO(scheduledDate)
    .setZone(IANA)
    .plus({ days: 1 })
    // .plus({ seconds: 5 })
    .startOf("day")
    .toUTC()
    .toISO()

  console.log("NEXT DAY", nextDay)

  const queueNotifToNextDayPromise = queueNotif({
    scheduledDate: nextDay,
    IANA,
    username,
    contactType,
    notifInfo,
  })

  // Check metadata database for any due cards. If there are due cards, send email.
  console.log("SCHEDULEDDATE IN JOB PROCESOR", scheduledDate)

  const checkDueWordsAndNotifyPromise = getDueWordsFromDB(
    username,
    scheduledDate
  ).then((dueWords) => {
    if (dueWords.length > 0) {
      const sendNotifObj = {
        [contactType.toLowerCase()]: notifInfo,
        username,
        scheduledDate,
      }

      if (contactType === "EMAIL") {
        return sendEmail(sendNotifObj)
      } else if (contactType === "SMS") {
        return sendSMS(sendNotifObj)
      }
    }
  })

  await Promise.all([queueNotifToNextDayPromise, checkDueWordsAndNotifyPromise])
}
