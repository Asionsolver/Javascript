// Original array

const arr = [1, 2, 3, 4, 5, 6];

// const splicedArr = arr.splice(2, 3,7,8,9,10);
// const splicedArr2 = arr.splice(-2, 3,7,8,9,10);

// returns spliced array only removed elements and change main array
// console.log(splicedArr);
// console.log(splicedArr2);
// console.log(arr);

// to splice method return final array result without changing main array

const toSplicedArr = arr.toSpliced(2, 3,7,8,9,10);
// const toSplicedArr2 = arr.toSpliced(-2, 3,7,8,9,10);
console.log(toSplicedArr);
console.log(arr);