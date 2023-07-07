// A callback is a function passed as an argument to another function.




function sample(a, b, callBack) {
    var c = a + b //c = 13
    var d = a - b //d = 3

    var result = callBack(c, d)
    return result
}

function sum(a, b) { //sum function is used call back function 
    return a + b //a + b = 13 + 3 =16

}
var resultSum = sample(8, 5, sum)
console.log('The result of sum is ' + resultSum)

// We can create function as need

var resultAddition = sample(7, 9, function(c, d) {
    //c = a + b = 16
    //d = a -b = -2 
    return c - d //c - d = 16-(-2)=18
})

console.log('The result of addition is ' + resultAddition)

var resultMultiply = sample(5, 4, function(c, d) {

    //c = a + b = 9
    //d = a -b = 1 
    return c * d //c * d = 9*1 =  9
})

console.log('The result of multiply is ' + resultMultiply)