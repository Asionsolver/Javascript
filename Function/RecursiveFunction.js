function sayHi(n) {
    if (n === 0) {
        return
    }
    console.log('Hi, Ashis Kumar Pal')
    sayHi(n - 1)
}

sayHi(10)

function sum(n) {
    if (n === 1) {
        return 1
    }
    return n + sum(n - 1)
}

console.log(sum(10))

var arr = [1, 5, 6, 9, 8, 2, 3]

function sumOfArray(arr, lastIndex) {
    if (lastIndex < 0) {
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}

console.log(sumOfArray(arr, arr.length - 1))