// function myFunction() {
     // console.log(this)
//     console.log(this.a + this.b)
// }

 // myFunction()
// myFunction.call({ a: 10, b: 20 });

function myFunction(c, d) {
    // console.log(this)
    console.log(this.a + this.b + c + d)
}

// myFunction()
// myFunction.call({ a: 10, b: 20 }, 30, 40);
// myFunction.apply({ a: 15, b: 25 }, [30, 40]);

// myFunction.bind({ a: 7, b: 3 }, 30, 40) // this code will not work because bind return a function not call it. That means bind method bind a function with a object and return a function.

// var test = myFunction.bind({ a: 7, b: 3 }, 30, 40)
var test = myFunction.bind({ a: 7, b: 3 })
test(30, 40) // this code will work because we call the function which is return by bind method.