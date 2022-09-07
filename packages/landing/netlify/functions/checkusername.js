const fetch = require("node-fetch")

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
      const { username } = JSON.parse(event.body)
      console.log("username", username)

      const result = await macroMetaFetch("check-username", {
        username,
      })
      console.log("RESULT", result)
      const usernameExists = result !== undefined
      console.log("Username exists", usernameExists)
      
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ usernameExists })
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

async function macroMetaFetch(query, body){

  const response = await fetch("https://api-bullhead-dc53baa7.paas.macrometa.io/_fabric/_system/_api/restql/execute/" + query, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "apikey " + process.env.MACROMETA_API_KEY
    },
    body: JSON.stringify({
      bindVars: {
        ...body
      }
    })
  })

  const data  = await response.json()

  if(data.error){
    throw `
    MacroMeta fetch returned error for query:
   Query: ${query}
   Body: ${JSON.stringify(body)}
    Response: ${JSON.stringify(data)}
    `
  }

  return data.result[0]

}

exports.handler = handler;
