// gatsby-config.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  developMiddleware: (app) => {
    app.use(
      "/",
      createProxyMiddleware({
        target: "http://backend:7001", // Port của MedusaJS
        changeOrigin: true,
        onProxyReq: (proxyReq, req, res) => {
          proxyReq.setHeader('Host', 'localhost');
        },
      })
    );
  },
};
