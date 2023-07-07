//Higher Order Function

function add(a, b) {
    return a + b //return 13
}
// 5. We can pass function as an arguments 

function manipulate(a, b, func) {
    var c = a + b  //c = 13
    var d = a - b  //d = 5

    // function multiply() {
    //     var m = func(a, b)
    //     return m * c * d //return 13 * 13 * 5
    // }

    //or

    // return multiply() {
    //     var m = func(a, b)
    //     return m * c * d //return 13 * 13 * 5
    // }

    //or

    return function() {
        var m = func(a, b)
        return m * c * d //return 13 * 13 * 5
    }
}

var multiply = manipulate(9, 4, add)
console.log(multiply)
console.log(multiply())

// 6. We can return function from another function    

function addition(a, b, func) {
    var c = a + b
    var d = a - b

    return function() {
        var m = func(a, b)
        return m - c - d
    }
}

var returnFunc = addition(9, 4, add)
console.log(returnFunc)
console.log(returnFunc())