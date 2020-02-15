module.exports = {
  // cheap: 忽略文件的列信息，因为开发调试的时候，列信息用处不大
  // module: 会定位到我们的 ts 源码，而不是经过 loader 转译后的 js 源码
  // eval-source-map: 会将 sourcemap 的内容以 dataurl 的形式打印到文件中
  devtool: "cheap-module-eval-source-map"
};
