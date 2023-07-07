
var obj = {}
var obj2 = {}

obj.__proto__ === obj2.__proto__ //true

var result = Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2)  //open browser console and see out put details

console.log(result)



