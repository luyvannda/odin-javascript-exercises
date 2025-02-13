const add = function (...args) {
  return args[0] + args[1];
};

const subtract = function (...args) {
  return args[0] - args[1];
};

const sum = function (arr) {
  // let sum = 0;
  // if (arr === []) {
  //   sum = 0
  // } else if (arr.length === 1) {
  //   sum = arr[0];
  // } else {
  let sum = arr.reduce((sum, num) => sum + num, 0);
  return sum;
};

const multiply = function (...args) {
  let multiplies = args.reduce((multiply, num) => multiply * num, 1);
  return multiplies;
};

const power = function (...args) {
  return Math.pow(args[0], args[1]);
};

const factorial = function (num) {
  if (num < 0) {
    return -1;
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
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
