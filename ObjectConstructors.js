// const ashis = {
//     firstName: 'Ashis',
//     lastName: 'Kumar',
//     age: 25,
//     job: 'Web Developer',
//     fullName: function() {
//         return this.firstName + ' ' + this.lastName;
//     }
// };

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


const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather);


const myMother = new Person("Sally", "Rally", 48, "green");
console.log(myMother);

// Adding a new property to an existing object is easy:
myFather.nationality = "English"; // The property will be added to myFather. Not to myMother. (Not to any other person objects).

// You cannot add a new property to an object constructor the same way you add a new property to an existing object:
Person.nationality = "English";

// The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.