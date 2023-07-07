// * Back-Tics Syntax
// Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

let a = `Hello, world!`;
console.log(a);

// * Quotes Inside Strings. With template literals, you can use both single and double quotes inside a string:

let b = `It's a beautiful day!`;
console.log(b);

// * Multiline Strings. Template literals allows multiline strings:

let text =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text);


/*
Interpolation
Template literals provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is: ${...}

Variable Substitutions
Template literals allow variables in strings:
*/
let country = `Bangladesh`;
let a1 = 17;
let b1 = 18;
let sentence = `I am from ${country} and I am ${a1} years old and I am ${b1} years old. Toal age is ${a1 + b1}.`;
console.log(sentence);

// ! Automatic replacing of expressions with real values is called string interpolation.