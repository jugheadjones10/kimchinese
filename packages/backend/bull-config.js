exports.config = {
  concurrency: parseInt(process.env.QUEUE_CONCURRENCY || "1"),
  queueName: "mailbot",
  connection: {
    host: process.env.NODE_ENV === "production" ? process.env.REDIS_HOST : process.env.REDIS_TEST_HOST,
    port: parseInt(process.env.REDIS_PORT || "6379"),
  }
};
