const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

// The below needs to be uncommented when using eleventy alone for local testing. If using netlify dev, netlify injects env vars
// according to the netlify.toml, so this line doesn't need to be executed.
// require('dotenv').config({ path: ".dev.env" })

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "onrequest", // The serverless function name from your permalink object
    functionsDir: "./netlify/functions/",
  });

  eleventyConfig.addLiquidFilter("json", function(obj) { return JSON.stringify(obj) });

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("big.css");
  eleventyConfig.addPassthroughCopy("big.js");
  eleventyConfig.addPassthroughCopy("supermemo.js");
  eleventyConfig.addPassthroughCopy("shared/project-utils");
};
