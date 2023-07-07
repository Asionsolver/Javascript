function add(a, b) {
    return a + b
}

// First class Function--


// 1. A function can be store in a variable 

var sum = add // that function store in variable
console.log(sum(4, 6))
console.log(typeof sum)

// 2. A function can ba store in an array

var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](9, 6))
console.log(typeof arr)

// 3. A function can be store in an object 

var obj = { sum: add }
console.log(obj)
console.log(obj.sum(8, 9))

// 4. We can create function as need

setTimeout(function() {
    console.log('We can create function as need.')
}, 1000)

// 5. We can pass function as an arguments 

// 6. We can return function from another function