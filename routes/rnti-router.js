const rntiRouter = require('express').Router();
const { getInfo } = require('../controllers/api-controller.js');
const { getRNTI } = require('../controllers/rnti-controller.js');

rntiRouter.route('/')
    .get((req, res, next) => {
        if (req.query.rn) {
            getRNTI(req, res, next);
        } else {
            getInfo(req, res, next);
        };
    })
    .all((req, res, next) => {
        next({code: 405, message: 'Method not allowed.'});
    });

module.exports = { rntiRouter };