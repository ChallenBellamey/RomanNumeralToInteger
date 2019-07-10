const apiRouter = require('express').Router();
const { apiInfo } = require('../controllers/api-controller.js');

apiRouter.use('/', apiInfo);

module.exports = { apiRouter };