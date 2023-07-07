// ! The let keyword was introduced in ES6 (2015).

// let x = "John Doe";

// let x = 0;  // * SyntaxError: 'x' has already been declared

// With var you can:

// Example
// var x = "John Doe";

// var x = 0;

// Block Scope
// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:


// if(true){
//     let x = 2;
//     console.log(x);
// }

// console.log(x); // * x can NOT be used here

// ? Variables declared with the var keyword can NOT have block scope.

// ? Variables declared inside a { } block can be accessed from outside the block

// {
//     var x = 2;
// }
// console.log(x); // * x can be used here


// ! Variables defined with let cannot be Redeclared.
// Redeclaring Variables
// Redeclaring a variable using the var keyword can impose problems.

// Redeclaring a variable inside a block will also redeclare the variable outside the block:

// Example
// var x = 10;
// Here x is 10

// {
// var x = 2; // Here x is 2
// }

// Here x is 2

// Redeclaring a variable using the let keyword can solve this problem.

// Redeclaring a variable inside a block will not redeclare the variable outside the block:

// Example
// let x = 10; // Here x is 10

// {
// let x = 2; // Here x is 2
// }

// Here x is 10

// ! Variables defined with let must be Declared before use.

// Redeclaring a JavaScript variable with var is allowed anywhere in a program:

// Example
// var x = 2;
// Now x is 2

// var x = 3;
// Now x is 3

// With let, redeclaring a variable in the same block is NOT allowed:

// Example
// var x = 2;    // Allowed
// let x = 3;    // Not allowed

// {
// let x = 2;    // Allowed
// let x = 3     // Not allowed
// }

// {
// let x = 2;    // Allowed
// var x = 3     // Not allowed
// }
// Redeclaring a variable with let, in another block, IS allowed:

// Example
// let x = 2;    // Allowed

// {
// let x = 3;    // Allowed
// }

// {
// let x = 4;    // Allowed
// }
// ! Variables defined with let have Block Scope.

// Let Hoisting
// Variables defined with var are hoisted to the top and can be initialized at any time.

// Meaning: You can use the variable before it is declared:

// Example

// this steps are executed in the order they are written:
// var carName;
// carName = undefined;

// carName = "Volvo";
// var carName;
// console.log(carName);

// Variables defined with let are also hoisted to the top of the block, but not initialized.

// Meaning: Using a let variable before it is declared will result in a ReferenceError:

// Example

// this steps are executed in the order they are written:
// var carName;
// carName = undefined; // * ReferenceError: carName is not defined undefined

// carName = "Saab";
// let carName = "Volvo";
// console.log(carName); // * ReferenceError: carName is not defined