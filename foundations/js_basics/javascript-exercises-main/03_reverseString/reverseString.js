const reverseString = function(strForward) {
    // convert arg into character array, reverse it, then reassemble
    let strReverse = strForward.split("").reverse().join("");
    return strReverse;
};

debugger;
// Do not edit below this line
module.exports = reverseString;
