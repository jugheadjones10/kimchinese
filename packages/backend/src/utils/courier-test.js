const { sendEmail, sendSMS } = require("./src/queue/send-notif.js")

// sendEmail({
//   email: "kimyoungjin1001@gmail.com",
//   username: "kimchinse",
//   scheduledDate: "FF",
// })

sendSMS({
  sms: "+8201031344901",
  username: "kimchinse",
  scheduledDate: "FF",
})
