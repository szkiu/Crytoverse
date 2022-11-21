const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("global-metrics/quotes/latest", {
      target: "https://pro-api.coinmarketcap.com/v1/",
      changeOrigin: true,
    })
  );
};
