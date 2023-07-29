var arr = [1, 2, 3, 6, 90, 8, 7, 4, 9, 5, 11, 23, 69, 87, 41, 45]

// var result = arr.find(function(value) {
//     return (value === 56)
// })

// console.log('The main find result is ' + result)

// var result1 = arr.findIndex(function(value) {
//     return value === 9
// })
// console.log('The result index is ' + (result1 + 1))

function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i]
        }
    }
}

var result = myFind(arr, function(value) {
    return value === 9
})
console.log('The main find result is ' + result)

function myFindIndex(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i
        }
    }
}

var result1 = myFindIndex(arr, function(value) {
    return value === 9
})
console.log('The main find number index is ' + result1)