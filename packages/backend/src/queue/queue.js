const config = require("#root/bull-config")
const { Queue } = require("bullmq")

const queue = new Queue(config.queueName, {
  connection: config.connection,
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: "exponential", delay: 3000 },
  },
})
module.exports = queue
