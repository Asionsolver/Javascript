// const a = 10;
// a = 20; // Error: Assignment to constant variable
// console.log(a);

// let b = 10;
// b = 20;
// console.log(b); // 20

// if (true) {
//     var d = 20;
// }

// console.log(d); // 20

// for(var i = 0; i < 10; i++) {
// }
// console.log(i);
 

if (true) {
    let d = 20;
}

// console.log(d); // 20

for(let i = 0; i < 10; i++) {
}
// console.log(i);

// Immediately Invoked Function 

(function() {
    var a = 10;
    console.log(a);
}
)();

console.log(a); // Error: a is not defined

