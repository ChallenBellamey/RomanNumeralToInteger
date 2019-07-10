
const romanNumeralsToInteger = (RN) => {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    const RNArray = RN.split('');
    let result = 0;
    if (RNArray.every(rn => Object.keys(romanNumerals).includes(rn))) {
        while (RNArray.length > 0 && result <= 5000) {
            let n = romanNumerals[RNArray.shift()];
            if (romanNumerals[RNArray[0]] > n) {
                n = romanNumerals[RNArray.shift()] - n;
            };
            result += n;
        };
        if (result > 5000) {
            result = 'Requested value is greater than 5000.';
        };
    } else {
        result = 'Invalid Roman numerals.';
    };
    return result;
};

module.exports = { romanNumeralsToInteger };