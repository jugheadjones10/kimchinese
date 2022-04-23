const { deflogger, imptlogger } = require("../logging.js")

module.exports = function(queue, worker, scheduler){

  worker.on("completed", (job) => {
    deflogger.debug(`Completed job ${job.id} successfully`)
  });

  worker.on("failed", (job, err) =>
    imptlogger.error(`Failed job ${job.id} with ${err}`)
  );

}
