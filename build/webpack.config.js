const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const devConfig = require("./webpack.dev.config");
const proConfig = require("./webpack.pro.config");

module.exports = (env, argv) => {
  // 这样可以获得传入的配置参数
  let config = argv.mode === "development" ? devConfig : proConfig;
  return merge(baseConfig, config);
};
