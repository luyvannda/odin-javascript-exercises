const leapYears = function (years) {
  let isLeapYears = false;

  if (years % 100 === 0 && years % 400 !== 0) {
    isLeapYears = false;
  } else if (years % 4 === 0 || years % 400 === 0) {
    isLeapYears = true;
  }
  return isLeapYears;
};
let result = leapYears(1900);
console.log(result);
// Do not edit below this line
module.exports = leapYears;
