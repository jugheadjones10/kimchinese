const { DateTime } = require("luxon");
const macroMetaFetch = require("../macrometa-fetch.js")
const fisherYatesShuffle = require("../project-utils/index.cjs")

module.exports = async function getData(configData){

  const username = configData.eleventy?.serverless?.query?.username || "kimchinese"

  const { IANA, email, words } = await macroMetaFetch("get-by-date", { 
    username, 
    filterTime: DateTime.utc().toISO()
  })
  console.log("Words from DB:", words)

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

  console.log("Processed Words:", finalWords)

  return {
    words: fisherYatesShuffle(finalWords),
    email,
    username,
    IANA
  }

}

