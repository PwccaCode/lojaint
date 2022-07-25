const express = require('express');
const route = express.Router();
const services = require('../services/render')
const controller = require('../controller/controller')
const model = require('../model/model')

/**
 *  @descrição Rota de root (index)
 *  @metodo GET
 */
route.get('/', services.homeRoutes);

/**
 *  @descrição adicionar usuarios
 *  @metodo GET /novoprod
 */
route.get('/novoprod',  services.novoprod);

/**
 *  @descrição Rota de root (index)
 *  @metodo GET /updateprod
 */
route.get('/updateprod',  services.updateprod);


//API

route.post('/api/prods', controller.create);
route.get('/api/prods', controller.find);
route.put('/api/prods/:id', controller.update);
route.delete('/api/prods/:id', controller.delete);



module.exports = route
