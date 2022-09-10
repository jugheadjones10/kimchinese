const { Worker, QueueScheduler } = require("bullmq")
const config = require("#root/bull-config")
const jobProcessor = require("./job-processor.js")

const scheduler = new QueueScheduler(config.queueName, {
  connection: config.connection,
})

const worker = new Worker(config.queueName, jobProcessor, {
  connection: config.connection,
  concurrency: config.concurrency,
})

exports.jobProcessor = jobProcessor
exports.queueNotif = require("./queue-notif")
exports.queue = require("./queue")

exports.worker = worker
exports.scheduler = scheduler

worker.on("completed", (job) => {
  console.log("JOB COMPLETED")
})

worker.on("failed", (job, err) => console.log("JOB FAILED", err))

worker.on("error", (err) => {
  console.error("Worker error!", err)
})
