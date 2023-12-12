const palindromes = function (testString) {
    testString = testString.toUpperCase().replace(/[^A-Z0-9]/g, "");
    return testString == testString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
