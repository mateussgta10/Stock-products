const express = require('express');

const CompanyController = require('./controllers/CompanyController');
const ProductsController = require('./controllers/ProductsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/companies', CompanyController.index)
routes.post('/companies', CompanyController.create);

routes.get('/profile', ProfileController.index)

routes.get('/products', ProductsController.index);
routes.post('/products', ProductsController.create);
routes.delete('/products/:id', ProductsController.delete);


module.exports = routes;