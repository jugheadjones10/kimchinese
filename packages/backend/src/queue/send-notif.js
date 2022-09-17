const { CourierClient } = require("@trycourier/courier")

const courier = CourierClient({
  authorizationToken: process.env.COURIER_AUTH_TOKEN,
})

const link = "http://app.kimchinese.com/?username="

exports.sendEmail = function sendEmail({ email, username, scheduledDate }) {
  return courier
    .send({
      message: {
        to: {
          email,
        },
        content: {
          title: "Here's your KimChinese link!",
          body: `Dear ${username},
        Here's your flashcard review link for today. Have fun!
        ${link + username}`,
        },
        routing: {
          method: "single",
          channels: ["email"],
        },
      },
    })
    .then((res) => {
      console.log("Courier response", JSON.stringify(res) + scheduledDate)
    })
}

exports.sendSMS = function sendSMS({ sms, username, scheduledDate }) {
  return courier
    .send({
      message: {
        to: {
          phone_number: sms,
        },
        content: {
          title: "Here's your KimChinese link!",
          body: `Dear ${username},
        Here's your flashcard review link for today. Have fun!
        ${link + username}`,
        },
        routing: {
          method: "single",
          channels: ["sms"],
        },
      },
    })
    .then((res) => {
      console.log("Courier response", JSON.stringify(res) + scheduledDate)
    })
}
