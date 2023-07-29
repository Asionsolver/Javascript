var arr = [1, 4, 5, 6, 1]

// var sum = arr.reduce(function(prev, current, index, arr) {
//         return prev + current
//     }, 10) //optional

// console.log(sum)

// var max = arr.reduce(function(prev, current) {
//     return Math.max(prev, current)
// })

// console.log(max)
// var min = arr.reduce(function(prev, current) {
//     return Math.min(prev, current)
// })

// console.log(min)


// function myReduce(arr, cb, accumulator) {
//     for (var i = 0; i < arr.length; i++) {
//         accumulator = cb(accumulator, arr[i])
//     }
//     return accumulator
// }

// var sum = myReduce(arr, function(prev, current) {
//     return prev + current
// }, 0)

// console.log('Original array is ' + '[' + arr + ']')
// console.log('The result of sum is ' + sum)
// console.log(" ")
// var maximum = myReduce(arr, function(prev, current) {
//     return Math.max(prev, current)
// }, arr[0])
// console.log('Original array is ' + '[' + arr + ']')
// console.log('The result of maximum number is ' + maximum)
// console.log(" ")


// var minimum = myReduce(arr, function(prev, current) {
//     return Math.min(prev, current)
// }, arr[0])

// console.log('Original array is ' + '[' + arr + ']')
// console.log('The result of minimum number is ' + minimum)
// console.log(" ")



var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log(petCounts); 
