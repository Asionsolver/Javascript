// Constructor pattern in array
const arr = new Array(); //arr = [] 
console.log(arr);

const arr1 = new Array(5);
console.log(arr1, arr1.length); 

const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2, arr2.length);

// Factory pattern in array

const arr3 = Array(); //arr = [] 
console.log(arr3);

const arr4= new Array(5);
console.log(arr4, arr4.length); 

const arr5= new Array(1, 2, 3, 4, 5);
console.log(arr5, arr5.length);

// No Difference between Constructor and Factory pattern in array
console.log(arr.__proto__.constructor);
console.log(arr3.__proto__.constructor);