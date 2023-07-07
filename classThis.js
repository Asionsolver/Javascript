// 'use strict'

// function Shape(){
//     this.draw = function(){
//         console.log(this);
//     }

// }

// let s1 = new Shape();
// s1.draw();

// let anotherDraw = s1.draw;
// anotherDraw(); // window object

class Person{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    print(){
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }

    test(){
        console.log(this);
    }


}

let p1 = new Person('John', 'asion@gmail.com');
p1.test();

let test = p1.test;
test(); // undefined