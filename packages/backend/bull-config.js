const url = require('url');
const { deflogger, imptlogger } = require("./src/logging.js")

let connection = {
  host: process.env.REDIS_TEST_HOST,
  port: 6379
}

if(process.env.REDIS_URL){
  const IORedis = require("ioredis");
  connection = new IORedis(process.env.REDIS_URL)
}

exports.config = {
  concurrency: parseInt(process.env.QUEUE_CONCURRENCY || "1"),
  queueName: "mailbot",
  connection
};
