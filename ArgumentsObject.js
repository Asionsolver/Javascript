// function name(a, b, c) {
// function name() {
//     // console.log(arguments)
//     // console.log(typeof a)]

//     for (var i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])
//     }
// }

// function addAll() {
//     var sum = 0
//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }

//     console.log(sum)

// }
// // name()//return empty object
// name(10, 12, 85)
// console.log('Function Sum')
// addAll(1, 2, 3, 4)
// addAll(1, 2, 3, 4, 5, 5, 6, 9)
// addAll(1, 2, 3, 4, 5, 5, 6, 9, 85, 6, 63)

function test(a, b, c) {
    console.log(arguments)
    // console.log(typeof arguments) //object
    // console.log(JSON.stringify(arguments)) // {}
    // console.log(typeof a) //undefined
    // console.log(typeof b) //undefined
    // console.log(typeof c) //undefined
}

// test  ();
test(10, 20, 30);