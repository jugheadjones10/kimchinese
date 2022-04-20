module.exports = function(queue, worker, scheduler){

  worker.on("completed", (job) =>
    console.log(`Completed job ${job.id} successfully`)
  );
  worker.on("failed", (job, err) =>
    console.log(`Failed job ${job.id} with ${err}`)
  );

}
