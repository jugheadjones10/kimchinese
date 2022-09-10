const esbuild = require("esbuild")
require("dotenv").config()
module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("bundle.js")
  eleventyConfig.addWatchTarget("output.css")

  eleventyConfig.addPassthroughCopy("output.css")
  eleventyConfig.addPassthroughCopy("bundle.js")
  eleventyConfig.addPassthroughCopy("excel-format-example.jpg")
  eleventyConfig.addPassthroughCopy("fonts")
  // eleventyConfig.addPassthroughCopy("build")
  //On build, use esbuild to bundle and output shared library and serve as passthrough copy
}
