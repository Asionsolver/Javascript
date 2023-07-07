/**
* @WeakMap
*/

let a = {a:1}, b = {b:2};

// let map = new Map([[a, 'a'], [b, 'b']]);

// a = null;

// console.log(map)

let weakMap = new WeakMap([[a, 45], [b, 56]]);

a = null;

console.log(weakMap.get(1))
console.log(weakMap.has(a))


console.log(weakMap.get(b))
console.log(weakMap.has(b))
