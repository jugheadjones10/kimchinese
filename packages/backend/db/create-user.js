const fetch = require("node-fetch-commonjs")
var { DateTime } = require("luxon")
const macroMetaFetch = require("./macrometa-fetch.js")

module.exports = async function createUser({userReqWords, username, isoTime, IANA, email, query = "insert-user"}) {

	const words = userReqWords.map(word => {
		return {
			word,
			repetition: 0,
			interval: 0,
			efactor: 2.5,
			dueDate: isoTime 
		}
	})

	const body = {
			username,
			words,
			IANA,
			email
	}

	const result = await macroMetaFetch(query, body)

}
