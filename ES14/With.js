const arr = [1, 2, 3, 4, 5, 6];


// with method return final array result without changing main array

// with method work like that  arr.with(index, value)
// if index is positive then it will add value after index
// if index is negative then it will add value before index
// if index is not given then it will add value at the end of array
// with method add particular value with particular index

const result  =  arr.with(1, 400);
console.log(result); // [ 1, 400, 3, 4, 5, 6 ]