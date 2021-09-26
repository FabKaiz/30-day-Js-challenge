// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const is19OrOlder = people.some(p => 2021 - p.year >= 19); // true

// Array.prototype.every() // is everyone 19 or older?
const everyoneIs19OrOlder = people.every(p => 2021 - p.year >= 19); // false

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(p => p.id === 823423) // Super good

// Array.prototype.findIndex()
// Find the comment with this ID
const theComment = comments.findIndex(comment => comment.id === 823423) // 1

// delete the comment with the ID of 823423
delete(comments[theComment])