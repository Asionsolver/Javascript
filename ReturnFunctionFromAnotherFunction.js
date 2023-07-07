// function greet(msg) {
//     function greeting(name) {
//         return msg + ', ' + name + ' !'
//     }
//     return greeting
// }

// var gm = greet('Good morning')
// var msg = gm('Ashis Kumar Pal')
// console.log(msg)

// var gn = greet('Good night')
// var msg1 = gn("Ashis Kumar Pal")
// console.log(msg1)


// var hello = greet('How are you')
// var msg2 = hello('Ashis Kumar Pal')
// console.log(msg2)

function base(b) {
    return function(n) {
        var result = 1
        for (var i = 0; i < b; i++) {
            result *= n
        }
        return result
    }

}

var base10 = base(10)
console.log(base10(2))

var base5 = base(2)
console.log(base5(3))
console.log(base5(4))
console.log(base5(5))
console.log(base5(6))