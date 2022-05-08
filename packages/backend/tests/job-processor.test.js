
const jobProcessor = require("../src/routes/job-processor.js")
const { queue } = require("../src/routes/queue.js")
const macroMetaFetch = require("../db/macrometa-fetch.js")
const sgMail = require("@sendgrid/mail");

jest.mock("../src/routes/queue.js")
jest.mock("../db/macrometa-fetch.js")
jest.mock("@sendgrid/mail")


test(("business logic in job processor"), async () => {

})
