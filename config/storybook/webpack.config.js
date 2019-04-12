const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  storybookBaseConfig.config.module.rules.push({
    test: /\.(html)$/,
    loaders: ["html-loader"],
    // options: { minimize: false, attrs: ['img:src', 'img:data-src'] },
    include: path.resolve(__dirname, "../../")
  });

  storybookBaseConfig.config.module.rules.push({
    test: /\.(ttf|eot|woff|woff2|svg)$/,
    use: { loader: "file-loader" },
    include: path.resolve(__dirname, "../")
  });

  // storybookBaseConfig.resolve.alias['@src'] = "../../src";
  storybookBaseConfig.config.resolve.alias['@src'] = path.resolve(__dirname, '../../src/');


  // Return the altered config
  return storybookBaseConfig.config;
};