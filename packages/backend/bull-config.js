const url = require('url');
const { deflogger, imptlogger } = require("./src/logging.js")

let host = process.env.REDIS_TEST_HOST
let port = 6379

deflogger.debug("REDIS url: ", process.env.REDIS_URL)
if(process.env.REDIS_URL){
  const url = new URL(process.env.REDIS_URL)
  // host = url.hostname
  host = "redis://:p0b9018a1b837f4e9e5179cb08875565deb9b1889aea00904f0fdcc67313b02e2@ec2-18-214-181-102.compute-1.amazonaws.com"
  port = parseInt(url.port)
  console.log("redist", process.env.REDIS_URL)
  console.log("redist host", host)
  console.log("redist port", port)
}

exports.config = {
  concurrency: parseInt(process.env.QUEUE_CONCURRENCY || "1"),
  queueName: "mailbot",
  connection: {
    host,
    port
  }
};
