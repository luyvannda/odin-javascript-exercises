const repeatString = function (string, num) {
  let output = '';

  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 1; i <= num; i++) {
      output += string;
    }

    return output;
  }
}
let result = repeatString('hey', 1);
console.log(result);
// Do not edit below this line
module.exports = repeatString;
