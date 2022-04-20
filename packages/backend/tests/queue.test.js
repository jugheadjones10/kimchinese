const app = require("../server.js");
const request = require("supertest");
var { DateTime } = require("luxon")

const { Worker, Queue } = require("bullmq")
const { config } =  require("../bull-config")
// require('dotenv').config()
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);


beforeAll(() => {

  const queue = new Queue(config.queueName, {
    connection: config.connection,
  })

  const worker = new Worker(config.queueName, 
    async (job) => {
      console.log("JOB", job.data)
      const msg = {
        to: job.data.to, // Change to your recipient
        from: "kimyoungjin1001@gmail.com", // Change to your verified sender
        subject: "Here's your flashcards review link!",
        html: job.data.html,
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
    }, 
    {
      connection: config.connection,
      concurrency: config.concurrency,
    });

  worker.on("completed", (job) =>
    console.log(`Completed job ${job.id} successfully`)
  );
  worker.on("failed", (job, err) =>
    console.log(`Failed job ${job.id} with ${err}`)
  );


})

test('queue email endpoint works correctly', (done) => {

  request(app)
    .post("/queue/enqueue")
    .send({
      email: "mrtimer99@gmail.com",
      username: "harry",
      scheduleDates: [DateTime.fromISO("2022-04-19T11:21:00", { zone: "Asia/Seoul" })]
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });

});


// test.only('sendgrid works', async () => {
//   const msg = {
//     to: "mrtimer99@gmail.com", // Change to your recipient
//     from: "kimyoungjin1001@gmail.com", // Change to your verified sender
//     subject: "Here's your flashcards review link!",
//     html: "hey man"
//   }

//   const response = await sgMail.send(msg)
//   console.log(response)

// })
