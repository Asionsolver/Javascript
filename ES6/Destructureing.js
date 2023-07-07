let person = {
    name: "Tobi",
    age: 20,
    section: "SS3",
    roll: 20,
    address: {
        street: "No 1, CodeSweetly Street",
        city: "Lagos",
        state: "Lagos",
        country: "Nigeria"
    }
}

// let name = person.name;
// let age = person.age;

let {name, age, section, roll, address:{state, street, city, country}} = person;

console.log(name, age, section, roll, state, street, city, country);

let arr = [1, 2, 3, 4, 5];

let [a, b, c, d, e] = arr;

console.log(a, b, c, d, e); 


let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [first, second, third, , , , , ,nine] = arr2;

console.log(first, second, third, nine);