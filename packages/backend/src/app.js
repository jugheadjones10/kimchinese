const express = require("express");
const cors = require("cors")

// Routes
const ui = require("#routes/queue/ui")
const queue = require("#routes/queue/index")
const user = require("#routes/user/index")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/admin", ui)
app.use("/queue", queue)
app.use("/user", user)


module.exports = app
