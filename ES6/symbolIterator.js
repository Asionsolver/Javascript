let arr = [1, 2, 3, 4, 5];
let str = "Hello";

// console.log(arr[Symbol.iterator]); 
// console.log(str[Symbol.iterator]);


// Array Iterator

let iterate = arr[Symbol.iterator]();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());


// String Iterator

let iterate2 = str[Symbol.iterator]();
console.log(iterate2.next());
console.log(iterate2.next());
console.log(iterate2.next());
console.log(iterate2.next());
console.log(iterate2.next());
console.log(iterate2.next());