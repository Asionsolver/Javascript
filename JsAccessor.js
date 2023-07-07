// const person2 = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function() {
//     return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person2.fullName());

// const person3 = {
//     firstName: "John",
//     lastName: "Doe",
//     get fullName() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

// console.log(person3.fullName);

// JavaScript Object Accessors Benefits

// 1. Accessors are more secure than functions
// 2. The second example provides a simpler syntax. It is also more secure, because it is not possible to accidentally overwrite the fullName method.
// 3. It allows equal syntax for properties and methods
// 4. It can secure better data quality
// 5. It is useful for doing things behind-the-scenes


// Create an object:
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: " ",


    // get lang() {
    // return this.language;
    // },


//     set lang(lang) {
//     this.language = lang;
//     },
     //computed property
//     get fullName() {
//     return this.firstName + " " + this.lastName; 
//     }
// };

// Set an object property using a setter:
// person.lang = "en";

// console.log(person);

// console.log(person.lang);
// console.log(person.fullName);



// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe"
};

// Object.defineProperty()
Object.defineProperty(person, "fullName", {
    get: function() {
    return this.firstName + " " + this.lastName;
    }
});

// Display data from the object using a getter:
console.log(person.fullName);