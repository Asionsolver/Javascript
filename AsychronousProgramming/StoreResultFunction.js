// function sayMyName(name) {
//   let result;
//   setTimeout(() => {I
//     result = name;
//     console.log("I have finished...");
//   }, 3000);

//     return result;
// }

// Solution

function sayMyName(name) {
  setTimeout(() => {
    console.log(name);
    result = name;
    console.log("I have finished...");
  }, 3000);
}

let myName = sayMyName("John");
console.log(myName); // undefined
