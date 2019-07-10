
const romanNumeralsToInteger = (RN) => {
    const romanNumeralValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    const nextNumeralValue = (shift = true) => {
        if (shift) {
            return romanNumeralValues[RNArray.shift()];
        } else {
            return romanNumeralValues[RNArray[0]];
        };
    };

    const RNArray = RN.split('');

    const RNIsValid = RNArray.every((rn, i) => {
        const validSymbols = Object.keys(romanNumeralValues).includes(rn);
        const validArrangement = (romanNumeralValues[rn] <= romanNumeralValues[RNArray[i + 1]])
            ? RNArray.slice(i + 2).every(subrn => romanNumeralValues[subrn] <= romanNumeralValues[rn])
            : true;
        return (validSymbols && validArrangement);
    });

    let result = 0;
    
    if (RNIsValid) {
        while (RNArray.length > 0 && result <= 5000) {
            let n = nextNumeralValue();
            if (nextNumeralValue(false) > n) {
                n = nextNumeralValue() - n;
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