function person(name){
    this.name = name;
}

person.prototype.PI = 3.1416;

var p1 = new person("John");

// console.log(Object.getPrototypeOf(p1));
// console.log(p1.__proto__); //same as above.Do not use this. Because it is not a standard way.

// console.log(Object.getPrototypeOf(p1) ===person.prototype); //true 

var p2 = new person("Ashis");

console.log(p1);
console.log(p2);
