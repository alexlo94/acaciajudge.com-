module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    eleventyConfig.addPassthroughCopy("static/images/");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("_includes/assets/");
  };