const express = require('express');
const proxy = require('express-http-proxy');
require('dotenv').config();

const app = express();

app.use("/api/auth", proxy("http://auth-service:8081", {
  proxyReqPathResolver: function (req) {
    return `/auth${req.url}`;
  }
}));

app.use("/api/products", proxy("http://product-service:8082", {
  proxyReqPathResolver: function (req) {
    return `/products${req.url}`;
  }
}));

app.listen(3000, () => {
  console.log('API Gateway en cours d\'exécution sur le port 3000');
});
