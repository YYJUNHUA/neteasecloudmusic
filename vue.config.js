module.exports = {
  productionSourceMap: false,
  // 代理跨域
  devServer: {
    proxy: {
      "/dev-api": {
        target: "http://127.0.0.1",
        // pathRewrite: { '^/api': '' }
      },
    },
  },
};
