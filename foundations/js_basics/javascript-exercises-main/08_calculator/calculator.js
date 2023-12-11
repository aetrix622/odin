const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let arraySum = 0;
  arr.forEach(element => {
    arraySum += element;
  });
  return arraySum;
};

const multiply = function(arr) {
  let arrayProduct = 1;
  arr.forEach(element => {
    arrayProduct *= element;
  });
  return arrayProduct;
};

const power = function(base, exponent) {
	let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  } else {
    result = n;
    while (n > 1) {
      result *= --n;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
