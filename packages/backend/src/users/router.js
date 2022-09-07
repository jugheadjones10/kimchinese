const express = require("express")
const router = express.Router()

const { createUser, getUser } = require("./controller")

const multer = require("multer")
const storage = multer.memoryStorage()
//Check how the fileSize limit is enforced
const upload = multer({
  storage,
  limit: {
    fileSize: 5 * 1024 * 1024,
    // Not sure how the above is enforced by multer. Does it throw an error?
    // Will go with client-side validation for now.
  },
})

router.post("/user", upload.single("excel-file"), createUser)
router.get("/user/:username", getUser)

module.exports = router
