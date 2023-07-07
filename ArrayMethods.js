var arr = [1, 5, 3, 6, 9]
var arr2 = [10, 8, 2, 4, 7]

// console.log(arr.join('|'))
// console.log(arr.join(' '))
// console.log(arr.join(',')) //this method return string
// console.log(arr.fill(true))
// console.log(arr.fill(1))
// console.log(arr.fill(0))
// var arr3 = arr.concat(arr2)
// console.log(arr3)

// console.log(Array.isArray(arr)) //return true or false
var a = [1, 5, 3]
    // var b = a
var b = Array.from(a)
b[1] = 6
    // console.log(a) //change main array value. Because this method a refer a to b. So when change b array value then change a array value. So we can use Array.from method. Because Array.form method generate duplicate array but do not generate refeerence

console.log(a)
console.log(b)