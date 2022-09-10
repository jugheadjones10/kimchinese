const express = require("express")
const router = express.Router()

// Need to test this - might not work because of some dumb base path issue

// Bullboard UI
const { createBullBoard } = require("@bull-board/api")
const { BullMQAdapter } = require("@bull-board/api/bullMQAdapter")
const { ExpressAdapter } = require("@bull-board/express")

// All "external modules" should require any queue modules through the "index.js" aggregator module. This is to ensure that the
// initializers in queue-init are always loaded before any of the other queue modules are used.
const { queue } = require("./index")
console.log("UI BEING USED")

const serverAdapter = new ExpressAdapter()
const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
  queues: [new BullMQAdapter(queue)],
  serverAdapter: serverAdapter,
})
serverAdapter.setBasePath("/admin/ui")
router.use("/ui", serverAdapter.getRouter())

module.exports = router
