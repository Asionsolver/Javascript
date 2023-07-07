// Closures
/* A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. */

// function name() {
//     var x = 45
//     return function() {
//         console.log(x) //x called closer
//     }

// }

// var abc = name()
// console.dir(abc)

// Simple function

// var sum = function(num1, num2){
//     return num1 + num2;
// }

// console.log(sum(2,3));

// var num1 = 2;
// var num2 = 3;

// var sum = function(num1, num2){
//     return num1 + num2;
// }

// console.dir(sum());

// var sum = function(num1, num2){
//     return function(){
//         return num1 + num2;
//     }
// }

// var myFunc = sum();

// console.dir(myFunc);

// var num1 = 3;

// var sum = function(num1, num2){
//     var num2 = 2;
//     return function(){
//         return num1 + num2;
//     }
// }

// var myFunc = sum();

// console.dir(myFunc);

//  function bankAccount(initialBalance) {
//     var balance = initialBalance;
//     return function() {
//         return balance;
//     };
// }

// var account = bankAccount(1000000);
// console.log(account());

// console.log(balance) // ReferenceError: balance is not defined

// add sixth closure example level: intermediate
// (function(){
//     var num1 = 2;
//     var num2 = 3;

//     var sum = function(){
//         return num1 + num2;
//     };

//     console.log(sum());
//     console.dir(sum);

//     var num1 = 3;
//     var num2 = 4;

//     console.log(sum());
//     console.dir(sum);

// })();

// add seventh closure example level: intermediate

// (function(){let num1 = 2;
// let num2 = 3;

// let sum = function(){
//     return num1 + num2;
// }

// // console.log(sum());
// console.dir(sum); // not closure option show in console this console show script option
// })();

//add eight closure example level: intermediate

// function stopWatch(){
//     let startTime = Date.now();
//     function getDelay(){
//         console.log(Date.now() - startTime);
//     }
//     return getDelay;
// }

// var timer = stopWatch();

// // now create fake delay
// for(let i = 0; i < 100000000; i++){
//     let foo = Math.random() * 10000000;
// }

// timer();

// timer = null;
// timer(); // uncaught type error: timer is not a function because timer is null

//add nine closure example in asynchronous function level: intermediate

// function async() {
//   var a = 2;

//   setTimeout(function () {
//     console.log(a);
//   }, 5000);
// }

// async();
// function async() {
//   var a = 2;
//   var myFunc = function () {
//     console.log(a);
//   };
//   setTimeout(myFunc, 5000);
// }

// async();


//add ten closure example in asynchronous function level: intermediate


// var a;

// function async() {
//    a = 20;
//   var myFunc = function () {
//     console.log(a);
//   };
//   setTimeout(myFunc, 5000);
// }

// async();

// a = 30

//add eleventh closure example in forLoop function level: expert

// for (let i = 0; i <  5; i++) {
//     const f = ()=> {
//         console.log(i);
//     }
//     f();
// }

// for(let i = 0; i < 5; i++) {
//     const  myFunc = function() {
//         console.log(i);
//     }
//     console.log(i);
//     console.dir(myFunc);
//     setTimeout(myFunc, 3000);
// }

// console.log("After for loop");

// for(var i = 0; i < 5; i++) {
//     const  myFunc = function() {
//         console.log(i);
//     }
//     console.log(i);
//     console.dir(myFunc);
//     setTimeout(myFunc, 3000);
// }

// console.log(i);
