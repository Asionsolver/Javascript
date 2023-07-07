// normal function

// function add(a, b) {
    //     return a + b;
    // }


// arrow function

const add = (a, b) => { return a + b; }

console.log(add(2, 3));


// arrow function with one parameter

const square = a => { return a * a; }

console.log(square(5));


// arrow function with no parameter

const sayHello = () => { console.log("Hello"); }

sayHello();


// arrow function with no parameter and no return statement

const sayHello1 = () => console.log("Hello");

sayHello1();


// arrow function with no parameter and return statement

const sayHello2 = (a,b) => a + b;

console.log(sayHello2(2,3));

const one = a => a*a;

console.log(one(45));

