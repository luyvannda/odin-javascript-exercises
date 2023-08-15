const palindromes = function (str) {
  let lowerCase = str.toLowerCase();
  let splitStr = lowerCase.trim().split(/\W+/g);
  let reverseStr = lowerCase.split(/\W+/g)
    .join("")
    .split("")
    .reverse();
  console.log(splitStr.join(""));
  console.log(reverseStr.join(""));
  return splitStr.join("") === reverseStr.join("")
};

let result = palindromes('A car, a man, a maraca.');
console.log(result);
// Do not edit below this line
module.exports = palindromes;
