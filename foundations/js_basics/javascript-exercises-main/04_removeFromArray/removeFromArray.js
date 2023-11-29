const removeFromArray = function(theArray, ...args) {
    for (const arg of args) {
        const idx = theArray.indexOf(arg);
        if (idx !== -1) {
            theArray.splice(idx, 1);
        }
    }
    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
