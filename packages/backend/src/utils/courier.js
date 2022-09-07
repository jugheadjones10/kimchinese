const { CourierClient } = require("@trycourier/courier")

const courier = CourierClient({ authorizationToken: "" }); // get from the Courier UI

// Example: send a basic message to an email recipient
// const { requestId } = courier.send({
//   message: {
//     to: {
//       data: {
//         name: "Marty",
//       },
//       email: "kimyoungjin1001@gmail.com",
//     },
//     content: {
//       title: "Back to the Future",
//       body: "Oh my name we need 1.21 Gigawatts!",
//     },
//     routing: {
//       method: "single",
//       channels: ["email"],
//     },
//   },
// }).then(res => {
//   console.log("Courier response", res)
// })

const { requestId } = courier.send({
  message: {
    to: {
      data: {
        name: "Marty",
      },
      phone_number: "+8201031344901",
    },
    content: {
      title: "Back to the Future",
      body: "Oh my name we need 1.21 Gigawatts!",
    },
    routing: {
      method: "single",
      channels: ["sms"],
    },
  },
}).then(res => {
  console.log("Courier response", res)
})


// Example: send a basic message to an sms recipient
// const { requestId } = await courier.send({
//   message: {
//     to: {
//       data: {
//         name: "Jenny",
//       },
//       phone_number: "8675309",
//     },
//     content: {
//       title: "Back to the Future",
//       body: "Oh my {{name}}, we need 1.21 Gigawatts!",
//     },
//     routing: {
//       method: "single",
//       channels: ["sms"],
//     },
//   },
// });

// // Example: send a message to various recipients
// const { requestId } = await courier.send({
//   message: {
//     to: [
//       {
//         user_id: "<USER_ID>", // usually your system's User ID associated to a Courier profile
//         email: "test@email.com",
//         data: {
//           name: "some user's name",
//         },
//       },
//       {
//         email: "marty@email.com",
//         data: {
//           name: "Marty",
//         },
//       },
//       {
//         email: "doc_brown@email.com",
//         data: {
//           name: "Doc",
//         },
//       },
//       {
//         phone_number: "8675309",
//         data: {
//           name: "Jenny",
//         },
//       },
//     ],
//     content: {
//       title: "Back to the Future",
//       body: "Oh my {{name}}, we need 1.21 Gigawatts!",
//     },
//     routing: {
//       method: "all",
//       channels: ["sms", "email"],
//     },
//   },
// });

// // Example: send a message supporting email & SMS
// const { requestId } = await courier.send({
//   message: {
//     template: "<TEMPLATE_OR_EVENT_ID>", // get from the Courier UI
//     to: {
//       user_Id: "<USER_ID>", // usually your system's User ID
//       email: "example@example.com",
//       phone_number: "555-228-3890",
//     },
//     data: {}, // optional variables for merging into templates
//   },
// });

// // Example: send a message to a list
// const { requestId } = await courier.send({
//   message: {
//     template: "<TEMPLATE_OR_EVENT_ID>", // get from the Courier UI
//     to: {
//       list_id: "<LIST_ID>", // e.g. your Courier List Id
//     },
//     data: {}, // optional variables for merging into templates
//   },
// });

// // Example: send a message to a pattern
// const { requestId } = await courier.send({
//   message: {
//     template: "<TEMPLATE_OR_EVENT_ID>", // get from the Courier UI
//     to: {
//       list_pattern: "<PATTERN>", // e.g. example.list.*
//     },
//     data: {}, // optional variables for merging into templates
  //   },
  // });

  // // Example: send a message to a list, pattern and user
  // const { requestId } = await courier.send({
  //   message: {
  //     to: [
//       {
  //         list_pattern: "<PATTERN>", // e.g. example.list.*
  //       },
  //       {
//         list_id: "<LIST_ID>", // e.g. your Courier List Id
//       },
//       {
//         email: "test@email.com"
//       }
//     ]
  //     },
//     routing: {
  //       method: "single",
//       channels: ["email"],
  //     },
  //   },
  // });

// // Example: send a basic message that expires after the specified timeout
// const { requestId } = await courier.send({
  //   message: {
  //     to: {
  //       data: {
//         name: "Marty",
  //       },
//       email: "marty_mcfly@email.com",
  //     },
  //     content: {
  //       title: "Back to the Future",
//       body: "Oh my {{name}}, we need 1.21 Gigawatts!",
  //     },
//     routing: {
  //       method: "single",
  //       channels: ["email"],
  //     },
  //     timeout: {
//       message: 3600000 // 1 hour in milliseconds
  //     },
  //   },
// });

  // // Example: send a basic message with a trace id
  // const { requestId } = await courier.send({
  //   message: {
//     to: {
  //       data: {
//         name: "Marty",
//       },
//       email: "marty_mcfly@email.com",
  //     },
//     content: {
//       title: "Back to the Future",
  //       body: "Oh my {{name}}, we need 1.21 Gigawatts!",
//     },
  //     routing: {
  //       method: "single",
  //       channels: ["email"],
  //     },
//     metadata: {
  //       trace_id: "ravenclaw-for-the-win"
//     },
  //   },
// });
