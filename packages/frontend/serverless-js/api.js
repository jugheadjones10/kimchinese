const fetch = require("node-fetch")

exports.getDueWords = async function getDueWords({ username, currentTime }) {
  const response = await fetch(
    process.env.BACKEND_ENDPOINT + "/api/due-words",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, currentTime }),
    }
  )

  const jsonRes = await response.json()
  if (!response.ok) {
    throw jsonRes
  }

  return jsonRes
}

exports.getUser = async function getUser({ username }) {
  const response = await fetch(
    process.env.BACKEND_ENDPOINT + "/api/user/" + username,
    {
      method: "GET",
    }
  )

  const jsonRes = await response.json()
  if (!response.ok) {
    throw jsonRes
  }

  return jsonRes
}
