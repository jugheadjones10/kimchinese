const express = require("express")
const logger = require("#src/logging")
const cors = require("cors")

// Routes
// const ui = require("#routes/queue/ui")
// const queue = require("#routes/queue/index")
// const user = require("#routes/user/index")

const app = express()
app.use(cors())
app.use(express.json())

// app.use("/admin", ui)
// app.use("/queue", queue)
// app.use("/user", user)

app.use("/api", require("#src/users/router"))
app.use("/api", require("#src/words/router"))

app.use((err, req, res, next) => {
  logger.error(err)
  res.status(500).json({ message: err.message, error: err, stack: err.stack })
})

module.exports = app
