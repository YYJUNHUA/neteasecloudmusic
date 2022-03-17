module.exports = {
  // 不生产 Map 文件
  productionSourceMap: false,
  // 代理跨域
  devServer: {
    proxy: {
      "/dev-api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/dev-api": "" },
      },
    },
  },
};
