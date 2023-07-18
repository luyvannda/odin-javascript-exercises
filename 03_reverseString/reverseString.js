const reverseString = function (words) {
  let splitWords = words.split("");
  let output = "";
  for (let i = splitWords.length - 1; i >= 0; i--) {
    output += splitWords[i];
  }
  return output;
};
let result = reverseString('hello')
console.log(result);

// Do not edit below this line
module.exports = reverseString;
