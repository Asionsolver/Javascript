// ! apply Call Back Function

function sample(a,b){
    var c = a + b
    var d = a - b

    var result = sum (c,d) //code duplicate so far used call back function. It is helpful for programmer because do not have to write a lot of code
    return result
}

// function sample(a,b){
//     var c = a + b
//     var d = a - b

    //var result = addition (c,d) //code duplicate so far used call back function. It is helpful for programmer because do not have to write a lot of code
    // return result
//}

// function sum(a,b){
//     return a+b
// }
// function addition(a,b){
//     return a-b
// }

// console.log(sample(5,8))

// Call Back Function Example

function sample(a, b, callBack){  //the function is being taken as an argument
    var c = a + b
    var d = a - b
    var result = callBack (c,d) //function invoke
    return result
}

// function addition(a,b){ //function implementation
//     return a-b
// }

// var resultAddition = sample(5,8,addition)
// console.log(resultAddition)

// var resultMultiply = sample(2,1,function(c,d){
//     return c*d
// })

// console.log(resultMultiply)

function multiply(a,b){
    return a*b
}

var resultMultiply = sample(2,1,multiply)
console.log(resultMultiply)