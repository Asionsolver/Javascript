/*
Arrays are Objects
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.
*/

// const person = ["John", "Doe", 46];
// console.log(typeof person); // object
// console.log(person.length); // 3
/*
Array Elements Can Be Objects
JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
*/

// const myArray=[];
// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;

// * Accessing the Last Array Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
console.log(fruit); // Mango


// * Looping Array Elements
// You can loop through an array using a for loop:

let length = fruits.length; // 4 Best practice: Use the length property to get the length of an array and performance will be improved.
for (let i = 0; i < length; i++) {
  console.log(`${i + 1}. ${fruits[i]}`);
}

/*
Associative Arrays
Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.
*/

// const person = [];
// person[0] = "John";
// person[1] = "Doe";
// person[2] = 46;
// console.log(person.length);    // Will return 3
// person[0];        // Will return "John"

/*
WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.
*/

const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
console.log(person.length);    // Will return 0
person[0];         // Will return undefined


/*
* The Difference Between Arrays and Objects
1. In JavaScript, arrays use numbered indexes.  

2. In JavaScript, objects use named indexes.

* Arrays are a special kind of objects, with numbered indexes.

* When to Use Arrays. When to use Objects.
1. JavaScript does not support associative arrays.
2. You should use objects when you want the element names to be strings (text).
3. You should use arrays when you want the element names to be numbers.
*/

// * JavaScript new Array()
// JavaScript has a built in array constructor new Array().

// But you can safely use [] instead.

// These two different statements both create a new empty array named points:

const point = new Array(); // bad
const point2 = []; // good

// * These two different statements both create a new array containing 6 numbers:

const point3 = new Array(40, 100, 1, 5, 25, 10);
const point4 = [40, 100, 1, 5, 25, 10];

// * Solution 1:
// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
console.log(Array.isArray(fruits));

// *Solution 2:
// The instanceof operator returns true if an object is created by a given constructor:

console.log(fruits instanceof Array); // true


