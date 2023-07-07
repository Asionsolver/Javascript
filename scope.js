/**
@ Scope
*/



/**
1. Block Scope

Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

*/

// {
//     let x =2;
//     console.log(x); // 2 
// }

// console.log(x) // x can not be used here

// {
//     var x = 3;
//     console.log(x); // 2 
// }

// console.log(x) // x can be used here


/**
2. Local Scope

Variables declared within a JavaScript function, become LOCAL to the function.

*/

// code here can NOT use carName

// function myFunction() {
//     let carName = "Volvo";
//     // code here CAN use carName
//   }
  
//   console.log(carName) // code here can NOT use carName

// if (true) {
//     let x = 2;
//     console.log(x); // 2
//   }

//     console.log(x) // x can not be used here

//     if (true) {
//     var x = 3;
//     console.log(x); // 3
//     }

//     console.log(x) // x can be used here


// function Scope(){
//   var x = 1;
//   console.log(x);
// }

// Scope();

// console.log(x); // x can not be used here


/**
 * Automatically Global

If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

This code example will declare a global variable carName, even if the value is assigned inside a function.


 */

function Scope(){
  x = 1;
  console.log(x);
}

Scope();
console.log(x); // x can be used here
