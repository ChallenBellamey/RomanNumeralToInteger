const apiRouter = require('express').Router();
const { apiInfo } = require('../controllers/api-controller.js');
const { rntiRouter } = require('../routes/rnti-router.js');

apiRouter.route('/')
    .get(apiInfo)
    .all((req, res, next) => {
        next({code: 405, message: 'Method not allowed.'});
    });

apiRouter.use('/roman-numeral-to-integer', rntiRouter);

apiRouter.route('/*')
    .all((req, res, next) => {
        next({code: 400, message: 'Invalid url.'});
    });

module.exports = { apiRouter };