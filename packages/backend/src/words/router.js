const express = require("express")
const router = express.Router()

const { getDueWords, updateWords } = require("./controller")

router.post("/due-words", getDueWords)
router.post("/update-words", updateWords)

module.exports = router
