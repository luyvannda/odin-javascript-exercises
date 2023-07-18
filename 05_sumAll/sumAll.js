const sumAll = function (start, end) {
  let sum = 0;
  if (typeof start !== 'number'
    || typeof end !== 'number') {
    return 'ERROR';
  } else if (start < 0 || end < 0) {
    return 'ERROR';
  } else if (start < end) {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    return sum;
  } else if (start > end) {
    for (let i = end; i <= start; i++) {
      sum += i;
    }
    return sum;
  }
};

let result = sumAll(10, [90, 1]);
console.log(result);
// Do not edit below this line
module.exports = sumAll;
