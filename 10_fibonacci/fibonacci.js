const fibonacci = function (order) {
  let fibs = [1, 1];

  for (let i = 2; i < order; i++) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }
  console.log(fibs);
  return fibs[order - 1];
};
let result = fibonacci(6)
console.log(result);
// Do not edit below this line
module.exports = fibonacci;
