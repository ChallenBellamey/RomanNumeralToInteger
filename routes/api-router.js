const apiRouter = require('express').Router();
const { getInfo } = require('../controllers/api-controller.js');
const { rntiRouter } = require('../routes/rnti-router.js');

apiRouter.route('/')
    .get(getInfo)
    .all((req, res, next) => {
        next({code: 405, message: 'Method not allowed.'});
    });

apiRouter.use('/roman-numerals-to-integer', rntiRouter);

apiRouter.route('/*')
    .all((req, res, next) => {
        next({code: 400, message: 'Invalid url.'});
    });

module.exports = { apiRouter };