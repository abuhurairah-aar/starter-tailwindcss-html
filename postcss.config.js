const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    purgecss({
      content: ["./src/**/*.html"],
      css: ["./src/tailwind.css"],
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
