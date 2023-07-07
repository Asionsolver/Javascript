/*
"I will finish later!"

Functions running in parallel with other functions are called asynchronous

A good example is JavaScript setTimeout()
*/

//set timeout function
setTimeout(function() {
    console.log('AsynchronousBehavior.js loaded step 1');
},2000);


setTimeout(function() {
    console.log('AsynchronousBehavior.js loaded step 2');
},4000);


// set interval function
setInterval(function() {
    console.log('AsynchronousBehavior.js loaded step 3');
},5000);
    
console.log('AsynchronousBehavior.js loaded step 5');

setTimeout(myFunction, 3000);

function myFunction() {
    console.log('AsynchronousBehavior.js loaded step 4');
}

/*
Note
When you pass a function as an argument, remember not to use parenthesis.

Right: setTimeout(myFunction, 3000);

Wrong: setTimeout(myFunction(), 3000);
*/

