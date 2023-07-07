var person = {
    name: "Nicholas",
};

// console.log(person)
// person.toString();

// for (var i in person) {
//     console.log(i);
// }

// console.log(Object.keys(person)); 

// var descriptor = Object.getOwnPropertyDescriptor(person, "name");

// console.log(descriptor);  // {value: "Nicholas", writable: true, enumerable: true, configurable: true} 

// let baseObj = Object.getPrototypeOf(person);
// console.log(baseObj);

// let descriptor = Object.getOwnPropertyDescriptor(baseObj, "toString");
// console.log(descriptor);

Object.defineProperty(person, "name", {
    enumerable: false,
    configurable: false,
    writable: false, 
});

Object.keys(person); // []

for (const i in person) {
    console.log(i); // undefined
}

person.name = "Greg"; //cannot change the value because writable is false 
console.log(person.name); // "Nicholas"


