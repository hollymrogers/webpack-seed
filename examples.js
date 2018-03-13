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

//4 Modules
import cube from './test';
cube(20);

//5 Destructuring
let a, b, rest;
[a, b, ...rest] = [5,10,15,20,25,30,35,40,45,50];
console.log(a);
console.log(b);
console.log(rest);

//6 Default + rest + spread



//7 Classes


//8 Object rest properties



//9 Object spread properties
