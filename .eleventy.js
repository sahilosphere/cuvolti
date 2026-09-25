module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.ignores.add("src/admin/**");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addCollection("articles", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/articles/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
