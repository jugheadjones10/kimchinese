const app = require("./app")
const logger = require("#src/logging")

let port = process.env.PORT
if (port == null || port == "") {
  port = 8000
}

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}!`)
})
