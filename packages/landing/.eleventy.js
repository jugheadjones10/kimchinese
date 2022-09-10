const esbuild = require("esbuild")
require("dotenv").config()
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("output.css")
  eleventyConfig.addPassthroughCopy("dist/index.js")
  eleventyConfig.addPassthroughCopy("excel-format-example.jpg")
  eleventyConfig.addPassthroughCopy("fonts")
  // eleventyConfig.addPassthroughCopy("build")
  //On build, use esbuild to bundle and output shared library and serve as passthrough copy
}
