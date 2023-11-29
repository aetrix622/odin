const convertToCelsius = function(tempF) {
  let tempC = parseFloat(((tempF -32) * 5 / 9).toFixed(1));
  return tempC;
};

const convertToFahrenheit = function(tempC) {
  let tempF = parseFloat((tempC * 9 / 5 + 32).toFixed(1));
  return tempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
