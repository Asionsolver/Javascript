// ! "I will call back later!"

// ! A callback is a function passed as an argument to another function

// ! This technique allows a function to call another function

// ! A callback function can run after another function has finished

// ? 1st example

// function myDisplay(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
    
//   let result = myCalculator(5, 5);
//   myDisplay(result);

// ! The problem with the first example above, is that you have to call two functions to display the result.


// ? 2nd example

// function myDisplay(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   myDisplay(sum);
// }

// myCalculator(5, 5);


// ! The problem with the second example, is that you cannot prevent the calculator function from displaying the result.


// * Solution 

// function myDisplay(some) {
//   document.getElementById("demo").innerHTML = some;
// }

function myCalculator(num1, num2, callback) {
  let sum = num1 + num2;
  if(callback)
  callback(sum);

  return sum;
}

// myCalculator(5, 5, myDisplay);


myCalculator(5, 5, function (result) {
  document.getElementById("demo").innerHTML = result;
});


// const result = myCalculator(5, 5);
// console.log(result);