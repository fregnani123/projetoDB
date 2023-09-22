const express = require('express');
const Router = express.Router();
const controllers = require('../controller/controllers')

Router.get('/', (req, res) => {
    res.send('Servidor 200 OK')
});
Router.get('/produtos', controllers.findProduts);
Router.post('/newProduct', controllers.createProduct);
Router.get('/produto/:id', controllers.findOne)
module.exports = Router;
