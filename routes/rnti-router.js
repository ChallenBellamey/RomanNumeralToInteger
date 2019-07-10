const rntiRouter = require('express').Router();
const { apiInfo } = require('../controllers/api-controller.js');

rntiRouter.route('/')
    .get(apiInfo)
    .all((req, res, next) => {
        next({code: 405, message: 'Method not allowed.'});
    });

module.exports = { rntiRouter };