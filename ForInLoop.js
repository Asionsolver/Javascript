// ! The JavaScript for in statement loops through the properties of an Object:

// var person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// for (var key in person) {
//     console.log(key + ": " + person[key]);
//     // console.log(key);
// }
/*

Example Explained
1. The for in loop iterates over a person object
2. Each iteration returns a key (x)
3. The key is used to access the value of the key
4. The value of the key is person[x]

*/

var numbers = [15, 285, 38, 44, 745];
for (var key in numbers) {
    // console.log(key);
    console.log(numbers[key]);
}

/*
Do not use for in over an Array if the index order is important.

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
*/