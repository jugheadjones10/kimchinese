const url = require('url');
const { deflogger, imptlogger } = require("./logging.js")

let host = process.env.REDIS_TEST_HOST
let port = 6379

deflogger.debug("REDIS url: ", process.env.REDIS_URL)
if(process.env.REDIS_URL){
  const url = new URL(process.env.REDIS_URL)
  host = url.hostname
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
