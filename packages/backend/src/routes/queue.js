const { Worker, Queue, QueueScheduler } = require("bullmq")

const config =  require("../../bull-config")
const monitorQueue = require("./monitor-queue.js")
const jobProcessor = require("./job-processor.js")

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

monitorQueue(queue, worker, scheduler)

module.exports = {
  queue,
  worker
}
