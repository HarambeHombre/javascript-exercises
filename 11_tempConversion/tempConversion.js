const convertToCelsius = function(valueToConvert) {
  return (Math.round((valueToConvert - 32) * (5/9) * 10) / 10)
};

const convertToFahrenheit = function(valueToConvert) {
  return (Math.round((valueToConvert * (9/5) + 32 ) * 10) / 10)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
