const convertToCelsius = function (Fahrenheit) {
  let output = (Fahrenheit - 32) * 5 / 9
  return parseFloat(output.toFixed(1));
};
let isCelsius = convertToCelsius(100)
console.log(`Celsius temperature = ${isCelsius}`);

const convertToFahrenheit = function (Celsius) {
  let output = (Celsius * 1.8) + 32;
  return parseFloat(output.toFixed(1));
};
let isFahrenheit = convertToFahrenheit(73.2);
console.log(`Fahrenheit temperature = ${isFahrenheit}`);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
