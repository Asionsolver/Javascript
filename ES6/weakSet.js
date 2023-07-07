/**
* @WeakSet 
*/

let a = {a:1}, b = {b:2};

// let set = new Set([a,b]);

// a = null;  // a is not referenced anymore. so it will be garbage collected. Not cleared from set value of a.

// console.log(set)

// let arr = [...set];
// console.log(arr)
// console.log(arr[0])

let weakSet = new WeakSet([a,b]);

a = null;

console.log(weakSet.has(a)) 
console.log(weakSet.has(b))