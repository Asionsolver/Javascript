/**
* @Map is a new data structure introduced in ES6.
*/

// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

let map = new Map([
    ['a', 1],
    ['b', 2],
]);

map.set({name: 'John'}); // store the object as a key

console.log(map.get('a')); // 1

map.set('c', 3);

console.log(map.get('c')); // 3

console.log(map.size); // 3

console.log(map.has('a')); // true

// map.delete('a');

console.log(map.has('a')); // false

console.log(map.values()); // MapIterator { 1, 2, 3 }   

console.log(map.keys()); // MapIterator { 'a', 'b', 'c' }   

console.log(map.entries()); // MapIterator { [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] }  

// map for-of loop

for (let [key, value] of map) {
    console.log(key + ' = ' + value);
}

// map.forEach

map.forEach((value, key) => {
    console.log(key + ' = ' + value);
});






// map.clear();

