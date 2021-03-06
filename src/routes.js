const express = require('express');

const routes = express.Router();

const ProductController = require('../src/controller/ProductController')

routes.get("/", (req, res) => {
    res.send("Backend Ativo");
});

routes.get("/products", ProductController.index);
routes.post("/products", ProductController.store);
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;