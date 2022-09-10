const queue = require("./queue")
const { DateTime } = require("luxon")

module.exports = function queueNotif({
  scheduledDate,
  IANA,
  username,
  contactType,
  notifInfo,
}) {
  const jobOption = {
    jobId: username + scheduledDate,
  }

  const scheduledDateTime = DateTime.fromISO(scheduledDate)
  // If the scheduled time is before the current UTC time, process the job immediately by not setting the delay option.
  if (scheduledDateTime > DateTime.utc()) {
    jobOption.delay = scheduledDateTime.diffNow().toMillis()
    console.log("THE DELAY", jobOption.delay)
  }

  console.log("SCHEDULEDDATE IN QUEUE NOTIF", scheduledDate)

  return queue.add(
    "send notif",
    {
      scheduledDate,
      IANA,
      username,
      contactType,
      notifInfo,
    },
    jobOption
  )
}
