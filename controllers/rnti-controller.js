const { romanNumeralsToInteger } = require('../util/roman-numerals-to-integer.js');

const getRNTI = (req, res, next) => {
    const result = romanNumeralsToInteger(req.query.rn);
    if (typeof result === 'string') {
        res.status(400).send({err: {code: 400, message: result}});
    } else {
        res.status(200).send({numerals: req.query.rn.toUpperCase(), result});
    };
};

module.exports = { getRNTI };