const fetch = require("node-fetch")
const { DateTime } = require("luxon")
const { object, string, number, date } = require("yup")

const macroMetaFetch = require("../../../macrometa-fetch.js")

let oSchema = object({
  word: string().required(),
  repetition: number().required().integer(),
  interval: number().required().integer(),
  efactor: number().required().positive(),
  dueDate: string().required()
}).noUnknown()

async function handler(event) {

  console.log("onpost handler event: ", event)

  try {

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    }

    if (event.httpMethod === 'OPTIONS') {
      // To enable CORS
      return {
        statusCode: 200, 
        headers,
        body: 'success'
      }

    }else{
      const { userdata, words } = JSON.parse(event.body)
      const { remainingwords, username, email, userkey } = userdata
      console.log("Remaining words", remainingwords)

      const updateArr = []
      for(const [word, value] of Object.entries(words)){
        const o = { word, ...value }
        const validatedO = oSchema.validateSync(o, { strict: true })
        updateArr.push(validatedO)
      }
      console.log("updateArr", updateArr)
      const finalArr = updateArr.concat(remainingwords)
      console.log("Final concatenated words", finalArr)

      await macroMetaFetch("update-words", {
        userkey,
        words: finalArr
      })
      
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
