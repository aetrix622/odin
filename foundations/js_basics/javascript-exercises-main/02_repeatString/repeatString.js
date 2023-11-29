const repeatString = function(stringToRepeat, count) {
    if (count < 0) return "ERROR";
    let assembledString = "";
    for (let i = 0; i < count; i++) {
        assembledString += stringToRepeat;
    }
    return assembledString;
};

debugger;
// Do not edit below this line
module.exports = repeatString;
