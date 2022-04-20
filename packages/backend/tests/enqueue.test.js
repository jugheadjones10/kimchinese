const request = require("supertest");
var { DateTime } = require("luxon")

const express = require("express");
var cors = require('cors')

require('dotenv').config()
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const monitorQueue = require("../src/routes/monitor-queue.js")
const jobProcessor = require("../src/routes/job-processor.js")

let app
let topWorker
let topQueue
let topScheduler

beforeAll(() => {

  app = express();
  app.use(cors());
  app.use(express.json());

})

test('integration for express post request -> bullmq job queue -> sendgrid email send', (done) => {

  jest.doMock("../src/routes/job-processor.js", () => {
    return jest.fn(async (job) => {

      const msg = {
        to: job.data.to, // Change to your recipient
        from: "kimyoungjin1001@gmail.com", // Change to your verified sender
        subject: "Here's your flashcards review link!",
        html: job.data.html,
      }
      const response = await sgMail.send(msg)
      if(response[0].statusCode !== 202) done("Wrong email response: " + response)

    })
  })

  jest.doMock("../src/routes/monitor-queue.js", () => {
    return jest.fn((queue, worker, scheduler) => {

      topQueue = queue 
      topWorker = worker 
      topScheduler = scheduler 

      worker.on("completed", async (job) => {
        console.log("Completed job: " + job.id)
        const waitingCount = await queue.getDelayedCount()
        if(waitingCount === 0){
          done()
        }
      });

      worker.on("failed", (job, err) => {
        done(`Failed job ${job.id} with ${err}`)
      })

    })
  })


  const enqueue = require("../src/routes/enqueue.js")

  app.use("/enqueue", enqueue)

  request(app)
    .post("/enqueue")
    .send({
      email: "mrtimer99@gmail.com",
      username: "harry",
      scheduleDates: [
        DateTime.local({ zone: "Asia/Seoul" }).plus({ minutes: 1 }).toISO(), 
        DateTime.local({ zone: "Asia/Seoul" }).plus({ minutes: 2 }).toISO(), 
        DateTime.local({ zone: "Asia/Seoul" }).plus({ minutes: 3 }).toISO(),
      ]
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
    });

}, 300000);

afterAll(async () => {
  topQueue.close()
  await topWorker.close()
  await topScheduler.close()
})

