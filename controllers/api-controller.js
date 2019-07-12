
const getInfo = (req, res, next) => {
    const message = `Hello! Please attach a query to your get request to receive a Roman numerals conversion, i.e. ${req.get('host')}/api/roman-numerals-to-integer?rn=CC`;

    res.status(200).send({ message });
};

module.exports = { getInfo };