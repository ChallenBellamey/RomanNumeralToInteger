const app = require('express')();
const { apiRouter } = require('./routes/api-router.js');
const { handle400, handle405 } = require('./errors.js');

app.use('/api', apiRouter);

app.use('/*', (err, _, next) => {
    if (err.code) {
        next(err);
    } else {
        next({code: 400, message: 'Invalid url.'})
    };
});

app.use('/*', handle400);
app.use('/*', handle405);

module.exports = { app };