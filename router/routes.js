const express = require('express');
const Router = express.Router();
const controllers = require('../controller/controllers')

Router.get('/', controllers.findProduts)

module.exports = Router;