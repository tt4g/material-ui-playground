const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");
const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    postcssImport(),
    postcssFlexbugsFixes(),
    postcssPresetEnv({
      autoprefixer: {
        cascade: true,
        add: true,
        remove: true,
        supports: true,
        flexbox: "no-2009",
        grid: false,
      },
      stage: 3,
    }),
    cssnano({ preset: "default" }),
  ],
};
