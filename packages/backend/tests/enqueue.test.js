const request = require("supertest");
var { DateTime } = require("luxon")
const multer = require('multer')
const IORedis = require("ioredis");
const quibble = require("quibble")

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sgMailSpy = jest.spyOn(sgMail, "send")

const { connection } = require("#root/bull-config")

jest.mock("#db/macrometa-fetch")
const macroMetaFetch = require("#db/macrometa-fetch")

// Stub out these express routes so that we're only testing POST queue
// Try replacing with no mock impl?
// Why doesn't no mock implementation not work? - need to look at source code?
jest.mock("#routes/queue/ui", () => jest.fn())
jest.mock("#routes/user", () => jest.fn())
const queueui = require("#routes/queue/ui")
const user = require("#routes/user")

// So using jest.mock with partial mocking detaches the original module exports object (I think?), meaning even if I later change
// the implementation of jobProcessorInner, it won't be reflected in queue-init
// jest.mock("#routes/queue/queue-init")
const queueInit = require("#routes/queue/queue-init")

// Needs to be kim for now because kim is the only one with the correct schema
const app = require("#src/app")

const username = "kim"
let server 

beforeAll(async () => {
  // Crucial realization here: I tried to reset modules because I wanted new queues to be created for every test run so that
  // there aren't any remaining jobs. What I didn't realize was that the newly created queues would be using the same
  // redis connections. There's no point in instantiating new queues. Classic case of side effects.
  // jest.resetModules();

  //What I want - I want to get a reference to connection as queue.js is importing bull-config.js
  await new Promise((resolve, reject) => {
    server = app.listen(8000, () => {
      console.log("Example app listening on port 8000!")
      resolve()
    })
  })

})


//Test not yet complete
test('/queue endpoint correctly queues jobs; emails are sent correctly and received in the correct order', (done) => {
  // WHY the below doesn't work - the below requires jobProcessorInner to be a jest mock function, and the way to achieve that is
  // jest.mock("the module"). But this causes all the other exported functions to be auto mocked even though I want them to retain
  // their original implementations. But using partial mocking means my little hack in queue-init using exports won't work. So
  // jest.spyOn seems like the only workaround - a way to reach into a single export of a module and change its implementation
  // without touching all the other exported functions.
  //queueInit.jobProcessorInner.mockImplementation(async (job) => {
  //  console.log("Email runs???")
  //  //TODO check what happens when email returns non-202 status
  //  const msg = {
  //    to: job.data.to, // Change to your recipient
  //    from: "app@kimchinese.com", // Change to your verified sender
  //    subject: "Here's your flashcards review link!",
  //    text: job.id
  //  }
  //  const response = await sgMail.send(msg)
  //  console.log("Email send response: ", response)
  //  if(response[0].statusCode !== 202) throw "Wrong email response: " + response
  //})

  // Why does the below work but not equating to jest.fn?
  jest.spyOn(queueInit, "jobProcessorInner").mockImplementation(async (job) => {
  // Aha - the jest.fn API doesn't allow me to do queueInit.jobProcessorInner.mockRestore() to restore the original implementation
  // queueInit.jobProcessorInner = jest.fn(async (job) => {
    console.log("Email runs???")
    //TODO check what happens when email returns non-202 status
    const msg = {
      to: job.data.to, // Change to your recipient
      from: "app@kimchinese.com", // Change to your verified sender
      subject: "Here's your flashcards review link!",
      text: job.id
    }
    const response = await sgMail.send(msg)
    console.log("Email send response: ", response)
    if(response[0].statusCode !== 202) throw "Wrong email response: " + response
  })

  queueInit.onWorkerCompleted = jest.fn(async (job) => {
    console.log("Completed job: " + job.id)
    const waitingCount = await queueInit.queue.getDelayedCount()
    if(waitingCount === 0){
      console.log("Cleared all jobs")
    }
  })

  queueInit.onWorkerFailed = jest.fn(async (job, err) => {
    done(`Failed job ${job.id} with ${err}`)
  })

  const scheduledDates = [
    DateTime.local({ zone: "Asia/Seoul" }).plus({ seconds: 5 }).toUTC().toISO(), 
    DateTime.local({ zone: "Asia/Seoul" }).plus({ seconds: 10 }).toUTC().toISO()
  ]
  console.log("Scheduled dates: ", scheduledDates)
  const emailSendArray = scheduledDates.map(date => username + date)

  // Seed a separate Macrometa database in a different region?
  // Write a memo please.
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

  scheduledDates.forEach(scheduledDate => {
    request(app)
      .post("/queue")
      .send({
        email: "test@inbound.kimchinese.com",
        username,
        scheduledDate
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
      });
  })


}, 30000);

test("real job processor implementation works as desired", (done) => {

  const scheduledDate = DateTime.local({ zone: "Asia/Seoul" }).plus({ seconds: 5 }).toUTC().toISO()

  macroMetaFetch.mockImplementation(async () => {
    const macroMetaFetch = jest.requireActual("#db/macrometa-fetch")
    const result = await macroMetaFetch("get-by-date", { username, filterTime: "2019-01-01"})
    return result
  })

  // This took way too long to figure out...
  queueInit.jobProcessorInner.mockRestore()

  queueInit.onWorkerCompleted = jest.fn(async (job) => {
    console.log("Completed job: " + job.id + "FUCKFUCKFUCK")

    const delayed = await queueInit.queue.getDelayed()
    const nextDay = DateTime.fromISO(scheduledDate).plus({ days: 1 }).startOf("day").toUTC().toISO()
    expect(delayed[0].data.scheduledDate).toBe(nextDay)

    //Careful - might need to clear the spy when you remove the "only" flag after this test
    expect(sgMailSpy).toHaveBeenCalledTimes(0)
    done()
  })

  queueInit.onWorkerFailed = jest.fn((job, err) => {
    done(`Failed job ${job.id} with ${err}`)
  })

  queueInit.queue.add("send email", {
    to: "test@inbound.kimchinese.com",
    html: `<a href="www.example.com">Here's your link</a>`,
    scheduledDate,
    username
  }, 
    {
      jobId: username + scheduledDate,
      delay: DateTime.fromISO(scheduledDate).diffNow().toMillis() 
    })

})

test("sefsef", (done) => {

  const scheduledDate = DateTime.local({ zone: "Asia/Seoul" }).plus({ seconds: 5 }).toUTC().toISO()

  macroMetaFetch.mockImplementation(async () => {
    const macroMetaFetch = jest.requireActual("#db/macrometa-fetch")
    const result = await macroMetaFetch("get-by-date", { username, filterTime: "2023-01-01"})
    return result
  })

  queueInit.onWorkerCompleted = jest.fn(async (job) => {
    console.log("Completed job: " + job.id + "FUCKFUCKFUCK")

    const delayed = await queueInit.queue.getDelayed()
    const nextDay = DateTime.fromISO(scheduledDate).plus({ days: 1 }).startOf("day").toUTC().toISO()
    expect(delayed[0].data.scheduledDate).toBe(nextDay)

    //Careful - might need to clear the spy when you remove the "only" flag after this test
    expect(sgMailSpy).toHaveBeenCalledTimes(1)
    done()
  })

  queueInit.onWorkerFailed = jest.fn((job, err) => {
    done(`Failed job ${job.id} with ${err}`)
  })

  queueInit.queue.add("send email", {
    to: "test@inbound.kimchinese.com",
    html: `<a href="www.example.com">Here's your link</a>`,
    scheduledDate,
    username
  }, 
    {
      jobId: username + scheduledDate,
      delay: DateTime.fromISO(scheduledDate).diffNow().toMillis() 
    })

})


afterAll(async () => {

  await new Promise((resolve, reject) => {
    server.close((e) => {
      if(e) reject(e)
      resolve()
    })
  })

  // Order here is important. Closing redis before closing the queue will throw an error.
  await queueInit.queue.close()
  await queueInit.worker.close()
  await queueInit.scheduler.close()

  await connection.flushdb()
  connection.disconnect()

})

