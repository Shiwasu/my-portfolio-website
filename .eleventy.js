module.exports = function(eleventyConfig){
    // tell eleventy to copy the 'css' folder and 'img' folder
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");

    // return my object options:
    return{
        dir:{
            input: "src",   // my source files (markdown, templates, etc.)
            output: "_site",    // where eleventy builds the site to
            includes: "_includes"   // folder for reusable layout parts
        }
    }
}