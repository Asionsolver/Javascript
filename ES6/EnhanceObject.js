let a=10, b= 20;


// ES5 Object Literal Syntax (Shorthand Property)
let obj = {
    a: a,
    b: b,
    print: function() { 
        console.log(this);
    }
}

console.log(obj); // {a: 10, b: 20}
obj.print();

// ES6 Enhance Object Literal Syntax (Shorthand Property)
// let obj = {
//     a,
//     b,
//     print() {
//         console.log(this);
//     }
// }

// console.log(obj); // {a: 10, b: 20}