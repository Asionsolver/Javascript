// Objective: Object.entries() method transforms object to array.

var obj ={
    a: 10,
    b: 20,
}

console.log(Object.entries(obj));

// Objective: Object.fromEntries() method transforms array to object.

var objArr = [
    ["a", 10],
    ["b", 20],
    ["c", 30],
    ["d", 40]
]

console.log(Object.fromEntries(objArr));