let s1 = Symbol("Tobi");
let s2 = Symbol("Tobi");

console.log(s1); // Symbol(Tobi)
console.log(s2); // Symbol(Tobi) 

var a = 10;
var b = 10;


console.log(s1 === s2); // false

console.log(a === b); // true --> This is the main difference between Symbol and other primitive types.

let tossingCoin = {
    HEAD: Symbol("HEAD"),
    TAIL: Symbol("TAIL")
}

console.log(tossingCoin.HEAD); // Symbol(HEAD)
console.log(tossingCoin.TAIL); // Symbol(TAIL)

console.log(tossingCoin.HEAD === tossingCoin.TAIL); // false

console.log(tossingCoin.HEAD === tossingCoin.HEAD); // true

console.log(tossingCoin.TAIL === tossingCoin.TAIL); // true




