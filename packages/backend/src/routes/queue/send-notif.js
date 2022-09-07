const { CourierClient } = require("@trycourier/courier")

const courier = CourierClient()

exports.sendEmail = function sendEmail({ email, username, scheduledDate }){
  return courier.send({
    message: {
      to: {
        email
      },
      content: {
        title: "Here's your KimChinese link!",
        body: `Dear ${username},
        Here's your flashcard review link for today. Have fun!
        ${link}`
      },
      routing: {
        method: "single",
        channels: ["email"]
      }
    }
  }).then(res => {
    console.log("Courier response", res + scheduledDate)
  })
}

exports.sendSMS = function sendSMS({ phone_number, username, scheduledDate }){
  return courier.send({
    message: {
      to: {
        phone_number
      },
      content: {
        title: "Here's your KimChinese link!",
        body: `Dear ${username},
        Here's your flashcard review link for today. Have fun!
        ${link}`
      },
      routing: {
        method: "single",
        channels: ["sms"]
      }
    }
  }).then(res => {
    console.log("Courier response", res + scheduledDate)
  })
}

