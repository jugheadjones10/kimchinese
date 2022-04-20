const app = require("./app")

let port = process.env.PORT
if (port == null || port == "") {
	port = 8000;
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
