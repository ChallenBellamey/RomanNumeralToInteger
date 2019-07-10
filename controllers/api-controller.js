
const apiInfo = (req, res, next) => {
    const message = `Hello! Please attach a query to your get request to receive a Roman numeral conversion, i.e. ${req.get('host')}/api/roman-numeral-to-integer?rn=CC`;

    res.status(200).send({ message });
};

module.exports = { apiInfo };