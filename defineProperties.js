/**
* @ Object.defineProperties()
*/

// The Object.defineProperties() method is used to define new or modify existing properties directly on an object or a constructor function. This method takes two arguments: the object on which to define the properties and an object that describes the properties to be defined.


const obj = {};

Object.defineProperties(obj, {
  name: {
    value: "John",
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: false,
    enumerable: true,
    configurable: false
  },
  greet: {
    value: function() {
      console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
    },
    writable: false,
    enumerable: false,
    configurable: false
  }
});

console.log(obj.name); // Output: John
obj.name = "Peter";
console.log(obj.name); // Output: Peter
console.log(obj.age); // Output: 30
obj.age = 40; // Throws an error in strict mode
obj.greet(); // Output: Hello, my name is Peter and I'm 30 years old.


// Define an object
const person = {};

// Define properties for the object using Object.defineProperties()
Object.defineProperties(person, {
  firstName: {
    value: "John",
    writable: true,
    configurable: true,
    enumerable: true
  },
  lastName: {
    value: "Doe",
    writable: true,
    configurable: true,
    enumerable: true
  },
  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      const parts = value.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    },
    configurable: true,
    enumerable: true
  }
});

// Access and update properties
console.log(person.firstName); // Output: "John"
console.log(person.lastName); // Output: "Doe"
console.log(person.fullName); // Output: "John Doe"

person.firstName = "Jane";
person.lastName = "Smith";
console.log(person.fullName); // Output: "Jane Smith"

person.fullName = "Mary Johnson";
console.log(person.firstName); // Output: "Mary"
console.log(person.lastName); // Output: "Johnson"

