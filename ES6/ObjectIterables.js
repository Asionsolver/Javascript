const arr = [1, 2, 3, 4, 5];

const obj = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
}

// console.dir(arr);
// console.dir(obj);
// console.log(arr[Symbol.iterator]());
const numIterator = arr[Symbol.iterator]();

console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());



// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let i of arr) {
//     console.log(i);
// }


// for (let i in obj) {
//     console.log(i);
// }

// object iterate in for loop

// for(let i= 0; i < Object.keys(obj).length; i++) {
//     console.log(obj[Object.keys(obj)[i]]);
// }
    

