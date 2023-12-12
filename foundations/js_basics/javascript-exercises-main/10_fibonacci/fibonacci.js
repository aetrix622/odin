const fibonacci = function(n) {
    if (n < 1) {return "OOPS"};
    let index = 1;
    let numbers = [0, 1];
    while (index < n) {
        numbers.push(numbers[0] + numbers[1]);
        numbers.shift();
        index++
    }
    return numbers[1];
};

// Do not edit below this line
module.exports = fibonacci;
