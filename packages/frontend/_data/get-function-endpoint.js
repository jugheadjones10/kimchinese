module.exports = async function getFunctionEndpoint(){
    return process.env.NODE_ENV === "production" ? process.env.NETLIFY_FUNCTION_PROD : process.env.NETLIFY_FUNCTION_TEST
}

