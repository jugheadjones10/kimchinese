module.exports = function(){
    console.log("FUNCTION ENDPOINT", process.env.FORM_SUBMIT_URL)
    return {
        formSubmitUrl: process.env.FORM_SUBMIT_URL,
        netlifyFunctionUrl: process.env.NETLIFY_FUNCTION_URL
    }
}

