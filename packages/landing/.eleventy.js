const esbuild = require("esbuild")
module.exports = function(eleventyConfig) {

  esbuild.build({
    entryPoints: ['shared.js'],
    bundle: true,
    minify: false,
    outdir: 'build/',
    format: "esm",
    watch: true
  })

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("output.css");
  eleventyConfig.addPassthroughCopy("index.js");
  eleventyConfig.addPassthroughCopy("excel-format-example.jpg");
  eleventyConfig.addPassthroughCopy("fonts")
  eleventyConfig.addPassthroughCopy("build")
  //On build, use esbuild to bundle and output shared library and serve as passthrough copy
};
