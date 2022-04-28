module.exports = async function getEnvironment(){
    return {
        functionEndpoint: process.env.FUNCTION_ENDPOINT || "/.netlify/functions/onpost"
    }
}

