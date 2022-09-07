const { Worker, Queue, QueueScheduler } = require("bullmq")

const config =  require("#root/bull-config")

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { DateTime } = require("luxon")

const macroMetaFetch = require("#db/macrometa-fetch")

const scheduler = new QueueScheduler(config.queueName, {
  connection: config.connection,
});

const queue = new Queue(config.queueName, {
  connection: config.connection,
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: "exponential", delay: 3000 }
 }
})

const worker = new Worker(config.queueName, jobProcessor, {
  connection: config.connection,
  concurrency: config.concurrency,
});

worker.on("completed", (job) => {
  exports.onWorkerCompleted(job)
});

worker.on("failed", (job, err) =>
  exports.onWorkerFailed(job, err)
);

exports.onWorkerCompleted = function(job){
  deflogger.debug(`Completed job ${job.id} successfully FUCKFUCK`)
}

exports.onWorkerFailed = function(job, err){
  imptlogger.error(`Failed job ${job.id} with ${err}`)
}

exports.jobProcessorInner = async function(job){
  const { scheduledDate, IANA, username, notif, notifChannels } = job.data

  // Enqueue new job for start of next day
  // Need to use user's timezone in order to find out what time the start of his tomorrow is. 
  const nextDay = DateTime.fromISO(scheduledDate).local({ zone: IANA }).plus({ days: 1 }).startOf("day").toUTC().toISO()
  const queueNextDay = queue.add("send notif", {
    scheduledDate: nextDay,
    IANA,
    username,
    notif,
    notifChannels
  },
  {
    jobId: username + nextDay,
    delay: DateTime.fromISO(nextDay).diffNow().toMillis() 
  })

  // Check metadata database for any due cards. If there are due cards, send email.
  const checkWordsAndSend = macroMetaFetch("get-by-date", { 
    username, 
    filterTime: DateTime.utc().toISO()
  }).then(([{ words }]) => {
    console.log("IN WORDS", words)
    if(words.length > 0){

      // Notification logic
      const sendNotifObj = {
        [notif]: notifChannels[notif],
        username,
        scheduledDate
      }

      if(notif === "email"){
        return sendEmail(sendNotifObj) 
      }else if(notif === "sms"){
        return sendSMS(sendNotifObj)
      }

    }
  })

  await Promise.all([queueNextDay, checkWordsAndSend])
}

async function jobProcessor(job){

  console.log("Job Processor")

  await exports.jobProcessorInner(job)

}

exports.queue = queue
exports.worker = worker
exports.scheduler = scheduler
