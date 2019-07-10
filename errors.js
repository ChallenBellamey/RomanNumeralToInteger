
const handle400 = (err, req, res, next) => {
    if (err.code === 400) {
        res.status(400).send(err);
    } else {
        next(err);
    };
};

const handle405 = (err, req, res, next) => {
    if (err.code === 405) {
        res.status(405).send(err);
    } else {
        next(err);
    };
};

module.exports = { handle400, handle405 };