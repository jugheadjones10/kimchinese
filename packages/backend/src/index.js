const app = require("./app")
const { deflogger, imptlogger } = require("./logging.js")

let port = process.env.PORT
if (port == null || port == "") {
	port = 8000;
}

app.listen(port, () => {
	deflogger.debug(`Example app listening on port ${port}!`)
})
