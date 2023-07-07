var arr = [1, 5, 3, 6, 8]

sum = 0
arr.forEach(function(value, index,arr){
    // console.log(value, index,arr)
    sum += value
})

console.log(sum)

// 1st step

// function forEach(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// forEach(arr)

// 2nd step

function forEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
}

// var sum = 0;

// forEach(arr, function(value, index, arr) {
//     console.log(value, index, arr)
//     sum += value
// })
// console.log(sum)

arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr1.forEach(function(value, index, arr) {
    arr1[index] = value + 2
})

console.log(arr1)

var arr2 = []
arr.forEach(function(value, index, arr) {
    // console.log(value)
    if (value % 2 === 0) {
        // console.log(value)
        arr2.push(value)
    }
    // return arr2

})
console.log(arr2)


