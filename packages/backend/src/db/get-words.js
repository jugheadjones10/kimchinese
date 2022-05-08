const fetch = require("node-fetch-commonjs")
const macroMetaFetch = require("./macrometa-fetch")

module.exports = async function getWords(query = "getwords") {
	const result = await macroMetaFetch(query, {})
	return result
}
