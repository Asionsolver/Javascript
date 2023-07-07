/**
* @set 
*/

let set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(set.size); // 10

set.add(11);

console.log(set.size); // 11
// 
// set.delete(11);

set.add(10); // 10 already exists so it will not be added
set.add(1); // 1 already exists so it will not be added 

console.log(set.size); // 10

console.log(set.has(10)); // true

console.log(set.has(11)); // false

// set.clear();

console.log(set.size); // 0

console.log(set.keys()) // SetIterator {1, 2, 3, 4, 5, …}

console.log(set.values()) // SetIterator {1, 2, 3, 4, 5, …}

let keyIterator = set.keys();

console.log(keyIterator.next()); // {value: 1, done: false}
console.log(keyIterator.next()); // {value: 2, done: false}
console.log(keyIterator.next()); // {value: 3, done: false}

let valueIterator = set.values();

console.log(valueIterator.next()); // {value: 1, done: false}
console.log(valueIterator.next()); // {value: 2, done: false}
console.log(valueIterator.next()); // {value: 3, done: false}


function isIterable(object) {
    return typeof object[Symbol.iterator] === 'function';
}

console.log(isIterable(set)); // true

for (let value of set) {
    console.log(value);
}


console.log(set.entries()); // SetIterator {1 => 1, 2 => 2, 3 => 3, 4 => 4, 5 => 5, …}

