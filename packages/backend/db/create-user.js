const fetch = require("node-fetch-commonjs")
var { DateTime } = require("luxon")
require('dotenv').config()

exports.createUser = async function(userReqWords, username, isoTime, IANA, email) {

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
		bindVars: {
			username,
			words,
			IANA,
			email
		}
	}

	console.time("DB operation")
	const response = await fetch("https://api-bullhead-dc53baa7.paas.macrometa.io/_fabric/_system/_api/restql/execute/insert-user", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "apikey " + process.env.MACROMETA_API_KEY
		},
		body: JSON.stringify(body)
	})
	console.timeEnd("DB operation")

	const data = await response.json()

	if(data.error){
		return Promise.reject("insert-word operation to DB returned error: " + JSON.stringify(data))
	}

}
