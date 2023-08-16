const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]


const findTheOldest = function (arr) {

  let currentYear = new Date().getFullYear();
  console.log(currentYear);

  return arr.reduce((next, last) => {
    let nextYearOfDeath = next.yearOfDeath || currentYear;
    let lastYearOfDeath = last.yearOfDeath || currentYear;

    let nextGuy = nextYearOfDeath - next.yearOfBirth;
    let lastGuy = lastYearOfDeath - last.yearOfBirth;

    return nextGuy < lastGuy ? last : next;
  })
};
let result = findTheOldest(people);
console.log(result);

// Do not edit below this line
module.exports = findTheOldest;
