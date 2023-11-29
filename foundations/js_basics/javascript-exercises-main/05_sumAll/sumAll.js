// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "ERROR";
    if (a < 0 || b < 0) return "ERROR";
    if (a > b) {
        return sumAll(b, a);
    }
    let sum = 0;
    for (i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
