
const getTheTitles = function (obj) {
  return obj.map((book) => book.title);
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

let result = getTheTitles(books);
console.log(result);

// Do not edit below this line
module.exports = getTheTitles;
