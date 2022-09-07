const IORedis = require("ioredis")

module.exports = {
  concurrency: 1,
  queueName: "mailbot",
  connection: new IORedis(process.env.REDIS_URL, {
    db: process.env.REDIS_DB || 0,
    maxRetriesPerRequest: null,
  }),
}
