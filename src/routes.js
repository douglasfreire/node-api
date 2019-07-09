const express = require('express');

const routes = express.Router();

const ProductController = require('../src/controller/ProductController')

routes.get("/products", ProductController.index);

module.exports = routes;