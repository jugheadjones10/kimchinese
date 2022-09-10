const { queueNotif, worker } = require("#queue/index")
const jobProcessor = require("#queue/job-processor")
const { DateTime } = require("luxon")

jest.mock("#queue/job-processor", () => {
  return jest.fn()
})

jest.setTimeout(20000)
test("queueNotif delays job to correct time", (done) => {
  // jest.useFakeTimers({ advanceTimers: true })
  queueNotif({
    // scheduledDate: DateTime.local({ zone: "Asia/Seoul" })
    //   .plus({ days: 1 })
    //   .toISO(),
    scheduledDate: DateTime.now().plus({ seconds: 5 }).toISO(),
    IANA: "Asia/Seoul",
    username: "Kimchinese",
    contactType: "SMS",
    notifInfo: "+8201031344901",
  })
  // jest.runAllTicks()
  // jest.runAllTimers()
  // jest.advanceTimersByTime(10)

  // jest.advanceTimersToNextTimer()
  worker.on("completed", (job) => {
    console.log("JOB COMPLETED")
    console.log(jobProcessor.mock.calls)
    done()
  })
  worker.on("failed", (job, err) => {
    console.log("JOB FAILED")
    done(err)
  })

  worker.on("error", (err) => {
    console.error("Worker error!", err)
    done(err)
  })

  // expect(jobProcessor.mock.calls)
})
