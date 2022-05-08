const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = async function macroMetaFetch(query, body){

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
