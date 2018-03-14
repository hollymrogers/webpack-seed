// 1. let and const
let user = "Fred";
const birthYear = 1966;

if (user === "Fred") {
  let user = "Andrew";
  const birthYear = 1958;
  console.log(`${user} ${birthYear}`);
}
console.log(`${user} ${birthYear}`);

//2. Arrows
var books = [
  'Pyrates',
  'Hell-boy',
  'Dictionary',
  'The Band'
];

console.log(books.map(books => books.length));

//3. Template Strings
let first = "Michael";
let last = "Smith";
let fullName = `${first} ${last}`;
console.log(fullName);

4 Modules
import cube from './test';
console.log(cube(20));

//5 Destructuring
let a, b, rest;
[a, b, ...rest] = [5,10,15,20,25,30,35,40,45,50];
console.log(a);
console.log(b);
console.log(rest);

//6 Default + rest + spread
function def(a, b=24) {
  return a * b;
}
console.log(def(2));

function sum(x, ...y) {
  return x * y.length;
}
console.log(sum(4,5,6,7,8));


function sum(a, b, c, d, e) {
  return a + b + c * d + e;
}
const numbers = [3, 1, 2, 4, 2];
console.log(sum(...numbers));

//7 Classes
class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get size() {
    return this.calcSize();
  }
  calcSize() {
    return this.height + this.width * 2;
  }
}
  const square = new Shape(20, 30);
  console.log(square.size);


//8 Object rest properties
const book = {
	title: 'Pyrates',
	genre: 'Non-fiction',
	category: 'History',
	author: 'Charles Johnson'
}
const { title, genre, ...res} = book;
console.log(genre);
console.log(res);


//9 Object spread properties
const bookCopy = {title, genre, ...res};
console.log(bookCopy);

