/*
NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
*/

let x1 = 100 / "Apple";
console.log(x1); // NaN

// * However, if the string contains a numeric value , the result will be a number:
let x2 = 100 / "10";
console.log(x2); // 10

// * You can use the global JavaScript function isNaN() to find out if a value is a not a number:
console.log(isNaN(x1)); // true
console.log(isNaN(x2)); // false

// * Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:
let x = NaN;
let y = 5;
let z = x + y;
console.log(z);

// * NaN is a number: typeof NaN returns number:
console.log(typeof NaN);

// * Or the result might be a concatenation like NaN5:
let x3 = NaN;
let y2 = "5";
let z2= x3 + y2;
console.log(z2);

// * Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
//console.log(myNumber);
}

// * Division by 0 (zero) also generates Infinity:

let x4 =  2 / 0;
console.log(x4); // Infinity
let y3 = -2 / 0;
console.log(y3); // -Infinity

// * Infinity is a number: typeof Infinity returns number.
console.log(typeof Infinity);

// * Hexadecimal
// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
let hex = 0xFF;
console.log(hex); // 255

/*
Never write a number with a leading zero (like 07).
Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

By default, JavaScript displays numbers as base 10 decimals.

But you can use the toString() method to output numbers from base 2 to base 36.

Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
*/

let myNumbers = 32;
console.log(myNumbers.toString(32));
console.log(myNumbers.toString(16));
console.log(myNumbers.toString(12));
console.log(myNumbers.toString(10));
console.log(myNumbers.toString(8));
console.log(myNumbers.toString(2));

// *JavaScript Numbers as Objects
// Normally JavaScript numbers are primitive values created from literals:

let x5 = 123;
console.log(typeof x5); // number

// * But numbers can also be defined as objects with the keyword new:

let y4 = new Number(123);
console.log(typeof y4); // object
/*
Do not create Number objects.

The new keyword complicates the code and slows down execution speed.

Number Objects can produce unexpected results:

When using the == operator, x and y are equal:
*/
let x6 = 500;
let y5 = new Number(500); // 
console.log(x6 == y5); // true. x == y is true because x and y have the same value.
console.log(x6 === y5); // true. When using the === operator, x and y are not equal.

let x7 = new Number(500);
let y6 = new Number(500);
console.log(x7 == y6); // false. x == y is false because objects cannot be compared.

let x8 = new Number(500);
let y7 = new Number(500);
console.log(x8 === y7); // false. x === y is false because objects cannot be compared.

// ! Comparing two JavaScript objects always returns false.