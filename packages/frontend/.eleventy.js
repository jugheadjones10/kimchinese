const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
require('dotenv').config()

module.exports = function(eleventyConfig) {
   eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "onrequest", // The serverless function name from your permalink object
    functionsDir: "./netlify/functions/",
  });

  eleventyConfig.addLiquidFilter("json", function(obj) { return JSON.stringify(obj) });
  eleventyConfig.addLiquidFilter("get-function-endpoint", function() { 
    return process.env.NODE_ENV === "production" ? process.env.NETLIFY_FUNCTION_PROD : process.env.NETLIFY_FUNCTION_TEST
  });

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("big.css");
  eleventyConfig.addPassthroughCopy("big.js");
  eleventyConfig.addPassthroughCopy("supermemo.js");
  eleventyConfig.addPassthroughCopy("shared/project-utils");
};
