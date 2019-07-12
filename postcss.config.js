const tailwindcss = require("tailwindcss");
const postcssNested = require(`postcss-nested`)

module.exports = {
  plugins: [
  	tailwindcss("./tailwind.config.js"), require("autoprefixer"),
  	postcssNested,
  ]
};
