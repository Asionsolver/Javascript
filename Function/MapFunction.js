var arr = [2, 4, 4, 5]

var sqrArr = arr.map(function(value, index, arr) {
    // return Math.random() * 100
    return value * value
})

console.log('Original array is '+'['+arr)
console.log(sqrArr) 

// function myMap(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//         var temp = arr[i] * arr[i]
//         newArr.push(temp)
//     }

//     return newArr
// }
// console.log('Original array is '+'['+arr)
// console.log(myMap(arr))


// function myMap(arr, cb) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//         var temp = cb(arr[i], i, arr)
//         newArr.push(temp)
//     }

//     return newArr
// }

// var resultQuibe = myMap(arr, function(value) {
//     return value * value * value
// })
// console.log('Original array is ' + '[' + arr + ']')
// console.log('The result of quibe is ' + '[' + resultQuibe + ']')
//     // console.log(resultQuibe)

// var resultMten = myMap(arr, function(value) {
//     return value * 10
// })


// console.log('Original array is ' + '[' + arr + ']')
// console.log('The result of multiply by 10 is ' + '[' + resultMten + ']')