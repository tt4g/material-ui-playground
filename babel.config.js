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

const babelPresetReact = [
  "@babel/preset-react",
  {
    // Enable new JSX syntax.
    // See: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    runtime: "automatic",
  },
];

const babelPresetTypescript = [
  "@babel/preset-typescript",
  {
    isTSX: false,
    allExtensions: false,
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

// Material-UI Minimizing Bundle Size: https://material-ui.com/guides/minimizing-bundle-size/
const babelPluginImportMaterialUICore = [
  "babel-plugin-import",
  {
    libraryName: "@material-ui/core",
    // Use "'libraryDirectory': ''," if your bundler does not support ES modules
    libraryDirectory: "esm",
    camel2DashComponentName: false,
  },
  "core",
];
const babelPluginImportMaterialUIIcons = [
  "babel-plugin-import",
  {
    libraryName: "@material-ui/icons",
    // Use "'libraryDirectory': ''," if your bundler does not support ES modules
    libraryDirectory: "esm",
    camel2DashComponentName: false,
  },
  "icons",
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
          babelPluginImportMaterialUICore,
          babelPluginImportMaterialUIIcons,
        ],
      },
      development: {
        presets: [babelPresetEnv, babelPresetReact, babelPresetTypescript],
        plugins: [
          babelPluginTransformRuntime,
          babelPluginTransformClassProperties,
          babelPluginTransformReactConstantElements,
          babelPluginImportMaterialUICore,
          babelPluginImportMaterialUIIcons,
        ],
      },
      // env.test used by jest with babel-jest.
      test: {
        presets: [babelPresetEnvTest, babelPresetReact, babelPresetTypescript],
        plugins: [
          babelPluginTransformRuntime,
          babelPluginTransformClassProperties,
          babelPluginTransformReactConstantElements,
          babelPluginImportMaterialUICore,
          babelPluginImportMaterialUIIcons,
        ],
      },
    },
  };
};
