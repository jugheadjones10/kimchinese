module.exports = async function getEnvironment(){
    console.log("FUNCTION ENDPOINT", process.env.FUNCTION_ENDPOINT )
    return {
        functionEndpoint: process.env.FUNCTION_ENDPOINT || "/.netlify/functions/onpost"
    }
}

