// calculate sum of all arguments passed to a function in normal way

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

// console.log(sum(1, 2, 3, 4, 5));

// calculate sum of all arguments passed to a function in Rest operator way

function sum(...rest) {
  return rest.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));

// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) {
  return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

// The invocation above will return:
["CodeSweetly", "Web Developer", "Male"];


let arr1 = [1, 2, 3, 4, 5];

console.log(...arr1);

let obj1 = {
    name: "Tobi",
    age: 20,
    class: "SS3"
}

let obj2 = {
    ...obj1,
}

console.log(obj2);

console.log(obj1 === obj2);

let obj3 = obj1;

console.log(obj3 === obj1);