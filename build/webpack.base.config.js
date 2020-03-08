const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "app.js"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: "ts-loader",
            options: {
              // 这个 loader 会复用项目中的 tsconfig.json 配置文件
              // 仅编译，不做类型检查
              // 这个选项放在这里，而不放在配置文件的原因是，编辑器 vscode 等还要读取配置文件的
              // 其他选项可以参考官方文档
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/tpl/index.html"
    }),
    // 类型检查插件，会将类型检查放置在额外的进程中进行，不影响构建速度 
    // 也就是说，当 ts-laoder 中的 transpileOnly 开启之后，那就需要用到这个插件了
    new ForkTsCheckerWebpackPlugin(),
  ]
};
