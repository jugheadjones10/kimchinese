const fetch = require("node-fetch")
const macroMetaFetch = require("./macrometa-fetch")

module.exports = async function createUser({userReqWords, username, isoTime, IANA, notif, notifChannels, query = "insert-user"}) {

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
			notif,
			notifChannels
	}

	const result = await macroMetaFetch(query, body)

}
