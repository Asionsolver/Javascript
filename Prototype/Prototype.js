
// function Person(name, age) {
//     let person = Object.create(Person.prototype);
//     this.name = name;
//     this.age = age;
    
//     return person;
// }

// Person.prototype = {
//     eat() {
//         console.log('Eating');
//     },
//     sleep() {
//         console.log('Sleeping');
//     },
//     walk() {
//         console.log('Walking');
//     }
// };

// const ashis =Person('Ashis', 20);
// ashis.eat();
// const asis = Person('Asis', 21);
// asis.sleep();


// function Person(name, age) {
//     // let this = Object.create(person.prototype);
//     this.name = name;
//     this.age = age;
    
//     // return this;
// }

// Person.prototype = {
//     eat() {
//         console.log('Eating');
//     },
//     sleep() {
//         console.log('Sleeping');
//     },
//     walk() {
//         console.log('Walking');
//     }
// };

// const ashis = new Person('Ashis', 20);
// ashis.eat();
// const ashi = new Person('Ashi', 21);
// ashi.sleep();

// ! Class Based Inheritance


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log('Eating');
    }
    sleep(){
        console.log('Sleeping');
    }
    walk(){
        console.log('Walking');
    }
}

const ashis = new Person('Ashis', 20);
ashis.eat();
const asis = new Person('Asis', 21);
asis.sleep();

