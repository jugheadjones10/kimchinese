const { Worker, Queue, QueueScheduler } = require("bullmq")

const config =  require("#root/bull-config")
// const jobProcessor = require("./job-processor")

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { DateTime } = require("luxon")

// const { queue } = require("./queue-init")
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
  console.log("FUCK")
  const { scheduledDate, to, html, username } = job.data

  // Enqueue new job for start of next day
  const nextDay = DateTime.fromISO(scheduledDate).plus({ days: 1 }).startOf("day").toUTC().toISO()
  const queueNextDay = queue.add("send email", {
    to,
    html,
    scheduledDate: nextDay,
    username
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
      const msg = {
        to,
        from: "app@kimchinese.com", // Change to your verified sender
        subject: "Here's your flashcards review link!",
        html
      }
      return sgMail.send(msg)
    }
  }).then(response => {
      if(response && response[0].statusCode !== 202) throw "Wrong email response: " + response
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
