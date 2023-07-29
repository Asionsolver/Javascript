// constructor function
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}


// ! Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects. It will break your code.

Person.prototype.country = "USA"; // ?  The property will be added to all Person objects. But not assigned directly to the constructor function. It will be added to the prototype property of the constructor function. The prototype property is shared by all objects created by the constructor function.

console.dir(Person);

const myFather = new Person("John", "Doe", 50, "blue");
// console.log(myFather);
console.log(myFather.country);