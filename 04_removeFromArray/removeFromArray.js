const removeFromArray = function (array, ...target) {
  for (let i = 0; i < target.length; i++) {
    while (array.includes(target[i])) {
      array.splice(array.indexOf(target[i]), 1)
    }
  }
  return array;
};
let result = removeFromArray([1, 2, 3], "1", 3)
console.log(result);
// Do not edit below this line
module.exports = removeFromArray;
