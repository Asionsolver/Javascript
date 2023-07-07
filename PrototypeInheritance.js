// Prototype Base Implementation in Javascript

// function Person(name, age) {  // Person is the super class
//     this.name = name;
//     this.age = age;
// }

// function Cricketer(name, age, type, runs, country) {  // Cricketer is the sub class
//     Person.call(this);
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.runs = runs;
//     this.country = country;
// }

// Person.prototype = {
//     eat: function () {
//         console.log(`${this.name} is Eating`);
//     },
//     sleep: function () {
//         console.log(`${this.name} is sleeping`);
//     },
//     ages: function () {
//         console.log(`${this.name} age is ${this.age}.`);
//     }
// };




// Cricketer.prototype = Object.create(Person.prototype);
// Cricketer.prototype.constructor = Cricketer;

// Cricketer.prototype.profile = function () {
//     console.log(`${this.name} is a ${this.type} from ${this.country}`);
// }

// Cricketer.prototype.run = function () {
//     console.log(`${this.name} runs ${this.runs}`);
// }

// let asion = new Cricketer('Asion', 25, 'Batsman', 100, 'India');


// console.log(asion.eat());
// console.log(asion.sleep());
// console.log(asion.ages());
// console.log(asion.profile());
// console.log(asion.run());


// Class Implementation in Javascript

class Person {  // Person is the super class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is Eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    ages() {
        console.log(`${this.name} age is ${this.age}.`);
    }
}

class Cricketer extends Person { // Cricketer is the sub class
    constructor(name, age, type, runs, country) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.runs = runs;
        this.country = country;
    }
    profile() {
        console.log(`${this.name} is a ${this.type} from ${this.country}`);
    }
    run() {
        console.log(`${this.name} runs ${this.runs}`);
    }
}

let asion = new Cricketer('Asion', 25, 'Batsman', 100, 'India');
let ashish = new Person('Ashish', 25, 'Batsman', 100, 'India');

console.log(asion.eat());
console.log(asion.sleep());
console.log(asion.ages());
console.log(asion.profile());
console.log(asion.run());

console.log(ashish.eat());
// console.log(ashish.profile()); // Cricketer not share the prototype of Person class. So it will not print the profile method.