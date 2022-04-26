const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { DateTime } = require("luxon");
require('dotenv').config()

const backendEndpoint = process.env.NODE_ENV === "production" ? process.env.BACKEND_ENDPOINT_PROD : process.env.BACKEND_ENDPOINT_TEST

const macroMetaFetch = require("../../../macrometa-fetch.js")

async function handler(event) {

  console.log("onpost handler event: ", event)

  try {

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };

    if (event.httpMethod === 'OPTIONS') {
      // To enable CORS
      return {
        statusCode: 200, 
        headers,
        body: 'success'
      };

    }else{
      const { userDetails, words } = JSON.parse(event.body)
      const { username, email } = userDetails

      const updateArr = Object.values(words)
      console.log("updateArr", updateArr)

      const scheduleDates = new Set()
      updateArr.forEach(item => {
        // console.log("Due date in korea time", DateTime.fromISO(item.dueDate, { IANA }))
        // console.log("Due date in start of day", DateTime.fromISO(item.dueDate, { IANA }).startOf("day").toISO())
        // console.log("Due date in start of day UTC", DateTime.fromISO(item.dueDate, { IANA }).startOf("day").toUTC().toISO())
        scheduleDates.add(item.dueDate)
      })

      console.log(JSON.stringify({
        username,
        scheduleDates: [...scheduleDates],
        email
      }))

      const scheduleDatesPromise = fetch(backendEndpoint + "/enqueue", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
          username,
          email,
          scheduleDates: [...scheduleDates]
        })
      })

      await Promise.all([
        scheduleDatesPromise,
        ...updateArr.map(item => {
          item.key = item.key.toString()
          return macroMetaFetch("update-word", item)
        })
      ])

      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*"
        }
      };
    }

  } catch (error) {

    console.log("Error", error)

    return {
      statusCode: error.httpStatusCode || 500,
      body: JSON.stringify(
        {
          error: error.message,
        },
        null,
        2
      ),
    };
  }
}

exports.handler = handler;
