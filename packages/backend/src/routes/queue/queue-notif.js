const { queue } = require("./queue-init")
const { DateTime } = require("luxon")

module.exports = function queueNotif({ scheduledDate, IANA, username, notif, notifChannels }){

  const jobOption = {
    jobId: username + scheduledDate
  }

  const scheduledDateTime = DateTime.fromISO(scheduledDate)
  // If the scheduled time is before the current UTC time, process the job immediately by not setting the delay option.
  if(scheduledDateTime > DateTime.utc()){
    jobOption.delay = scheduledDateTime.diffNow().toMillis() 
  }

  return queue.add("send notif", {
    scheduledDate,
    IANA,
    username,
    notif,
    notifChannels
  }, jobOption)

}
