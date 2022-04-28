const request = require("supertest");
var { DateTime } = require("luxon")
const multer = require('multer')
const IORedis = require("ioredis");

const express = require("express");
var cors = require('cors')

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

let app, server, topWorker, topQueue, topScheduler, redisConnection

beforeAll(() => {
  // Crucial realization here: I tried to reset modules because I wanted new queues to be created for every test run so that
  // there aren't any remaining jobs. What I didn't realize was that the newly created queues would be using the same
  // redis connections. There's no point in instantiating new queues. Classic case of side effects.
  // jest.resetModules();

  app = express();
  app.use(cors());
  app.use(express.json());
  server = app.listen(8000, () => {
    console.log("Example app listening on port 8000!")
  })
})

//Test not yet complete
test('enqueue post request sends email correctly', (done) => {

  jest.doMock("../bull-config.js", () => {
    redisConnection = new IORedis(process.env.REDIS_URL, {
      db: process.env.REDIS_DB,
      maxRetriesPerRequest: null
    })

    return  {
      concurrency: 1,
      queueName: "mailbot",
      connection: redisConnection
    }
  })

  jest.doMock("../src/routes/job-processor.js", () => {
    return jest.fn(async (job) => {

      const msg = {
        to: job.data.to, // Change to your recipient
        from: "app@kimchinese.com", // Change to your verified sender
        subject: "Here's your flashcards review link!",
        text: job.id
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
          console.log("Cleared all jobs")
        }
      });

      worker.on("failed", (job, err) => {
        done(`Failed job ${job.id} with ${err}`)
      })

    })
  })

  const enqueue = require("../src/routes/enqueue.js")
  app.use("/enqueue", enqueue)

  const username = "harry"
  const scheduleDates = [
    DateTime.local({ zone: "Asia/Seoul" }).plus({ seconds: 10 }).toUTC().toISO(), 
    DateTime.local({ zone: "Asia/Seoul" }).plus({ seconds: 20 }).toUTC().toISO()
  ]

  console.log("Scheduled dates: ", scheduleDates)

  const emailSendArray = scheduleDates.map(date => username + date)

  const upload = multer()
  app.post("/email", upload.any(), (req, res) => {
    const body = req.body

    if(emailSendArray[0] === body.text.trim()){
      console.log("Confirmed receipt of email: " + body.text)
      emailSendArray.shift()
      if(emailSendArray.length === 0) done()
    }else{
      done(`Error on order of emails received: ${emailSendArray[0]} was expected while ${body.text.trim()} was received in email`)
    }

    return res.sendStatus(200)
  })

  request(app)
    .post("/enqueue")
    .send({
      email: "test@inbound.kimchinese.com",
      username,
      scheduleDates
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
    });

}, 180000);

afterAll(async () => {

  await new Promise((resolve, reject) => {
    server.close((e) => {
      if(e) reject(e)
      resolve()
    })
  })

  // Order here is important. Closing redis before closing the queue will throw an error.
  await topQueue.close()
  await topWorker.close()
  await topScheduler.close()

  await redisConnection.flushdb()
  redisConnection.disconnect()

})

