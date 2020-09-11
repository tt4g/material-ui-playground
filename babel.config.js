const babelPresetEnv = [
  "@babel/preset-env",
  {
    useBuiltIns: false,
  },
];

const babelPresetEnvTest = [
  "@babel/preset-env",
  {
    targets: {
      node: "current",
    },
  },
];

const babelPresetReact = "@babel/preset-react";

const babelPresetTypescript = [
  "@babel/preset-typescript",
  {
    isTSX: true,
    allExtensions: true,
    allowNamespaces: true,
    allowDeclareFields: true,
    onlyRemoveTypeImports: true, // Only Typescript >= 3.8
  },
];

const babelPluginTransformRuntime = ["@babel/plugin-transform-runtime"];
const babelPluginTransformRemoveConsole = [
  "transform-remove-console",
  { exclude: ["error", "warn"] },
];
const babelPluginTransformClassProperties = ["transform-class-properties"];
const babelPluginTransformReactConstantElements = [
  "@babel/plugin-transform-react-constant-elements",
];

/**
 * @type {babel.ConfigFunction}
 */
module.exports = (api) => {
  api.cache.forever();

  return {
    env: {
      production: {
        presets: [babelPresetEnv, babelPresetReact, babelPresetTypescript],
        plugins: [
          babelPluginTransformRemoveConsole,
          babelPluginTransformRuntime,
          babelPluginTransformClassProperties,
          babelPluginTransformReactConstantElements,
        ],
      },
      development: {
        presets: [babelPresetEnv, babelPresetReact, babelPresetTypescript],
        plugins: [
          babelPluginTransformRuntime,
          babelPluginTransformClassProperties,
          babelPluginTransformReactConstantElements,
        ],
      },
      // env.test used by jest with babel-jest.
      test: {
        presets: [babelPresetEnvTest, babelPresetReact, babelPresetTypescript],
        plugins: [
          babelPluginTransformRuntime,
          babelPluginTransformClassProperties,
          babelPluginTransformReactConstantElements,
        ],
      },
    },
  };
};
