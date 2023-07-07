// String Literal
var s2 = 'String Literal'
var s1 = "String Literal"
var s3 = `String Literal`

// String Constructor
var sc1 = String('String Constructor 1')
var sc2 = String('655534')
var sc3 = String('4665.55465465')

console.log(s1)
console.log(s2)
console.log(s3)
console.log(sc1)
console.log(sc2)
console.log(sc3)

// Escape Character
// Because strings must be written within quotes, JavaScript will misunderstand this string:

// let text = "We are the so-called "Vikings" from the north.";
// console.log(text); // expected output: error
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text); // expected output: We are the so-called "Vikings" from the north.

let text1 = "We are the so-called \\Vikings\\ from the north.";
console.log(text1); // expected output: We are the so-called \Vikings\ from the north.


/*

The string will be chopped to "We are the so-called ".

The solution to avoid this problem, is to use the backslash escape character.

The backslash (\) escape character turns special characters into string characters:

Code	Result	Description
\'	      '	    Single quote
\"	      "	    Double quote
\\	      \	    Backslash

*/

/*
Do not create Strings objects.

The new keyword complicates the code and slows down execution speed.

String objects can produce unexpected results:

When using the == operator, x and y are equal:

*/

// let x = "John";
// let y = new String("John");
// console.log(x == y); // expected output: true

// When using the === operator, x and y are not equal:
// console.log(x === y); // expected output: false

// Note the difference between (x==y) and (x===y).

// (x == y) true or false?

let x = new String("John");
let y = new String("John");
console.log(x == y); // expected output: false because Object can not be compared with ==. Comparing two JavaScript objects always returns false.

// (x === y) true or false?
console.log(x === y); // expected output: false because Object can not be compared with ===. Comparing two JavaScript objects always returns false.