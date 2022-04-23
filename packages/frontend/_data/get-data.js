const { DateTime } = require("luxon");
const macroMetaFetch = require("../macrometa-fetch.js")

module.exports = async function getData(configData){

  const username = configData.eleventy?.serverless?.query?.username || "dick"

  const IANA = await macroMetaFetch("get-user-iana", { username })
  console.log("IANA", IANA)

  const { email, words } = await macroMetaFetch("get-by-date", { 
    username, 
    filterTime: DateTime.local({ zone: IANA }).endOf("day").toUTC().toISO()
  })

  const { fisherYatesShuffle } = await import("project-utils") 
  const finalWords = []

  words.forEach(item => {

    let arrayCopy
    if(item.examples){
      item.examples = fisherYatesShuffle(item.examples).slice(0, 2)
      arrayCopy = [...item.examples]
    }

    const array = ["coverType", "defType", "examplesType", "examplesType"]
    array.forEach(type => {
      if(type === "defType" && item.englishDefs[0].includes("English definition unavailable")) return
      if(type === "examplesType"){
        if(!item.examples) return
        finalWords.push({
          ...item,
          type: type,
          frontExample: arrayCopy.pop()
        })
      }else{
        finalWords.push({
          ...item,
          type: type
        })
      }
    })

  })

  return {
    words: fisherYatesShuffle(finalWords),
    email,
    username,
    IANA
  }

}

