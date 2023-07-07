// function add(a, b, c) {
//     return a + b + c
// }

// // add(45,6,98)

// function currying(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c
//         }
//     }
// }

// var result = currying(5)(7)(8)

// console.log(result)  //result = 20

const getPanCakeIngredients = (ingredient1) =>{
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`; 
        } 
    } 
} 
const ingredient = getPanCakeIngredients('Egg')('flour')('milk');
console.log(ingredient); // Egg, flour, milk

// Creating a friend request curry function

function sendRequest(greet){
    return function(name){
        return function(message){
            return `${greet} ${name}, ${message}`
        }
    }
}
const request = sendRequest('Hello')('John')('Please can you add me to your Linkedin network?')
console.log(request) // Hello John, Please can you add me to your Linkedin network?

// Advance currying function example

const curry =(fn) =>{
    return curried = (...args) => {
        if (fn.length !== args.length){
            return curried.bind(null, ...args)
        }
    return fn(...args);
    };
}
const totalNum=(x,y,z) => {
    return x+y+z 
} 
const curriedTotal = curry(totalNum);
console.log(curriedTotal(10) (20) (30));
