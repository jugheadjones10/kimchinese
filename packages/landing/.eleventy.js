const esbuild = require("esbuild")
require("dotenv").config()
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("output.css")
  eleventyConfig.addPassthroughCopy("bundle.js")
  eleventyConfig.addPassthroughCopy("excel-format-example.jpg")
  eleventyConfig.addPassthroughCopy("fonts")
}
