// Array Insert Remove and Replace

var arr = [4, 6, 3, 96, 6, 3, 6]
var arr2 = [4, 6, 3, 96, 6, 3, 6]

// arr.push(10) //value add in last index 

// arr.unshift(10) //value add in first index 

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//Array.splice(start: number, deleteCount: number, ...items: number[])
arr.splice(3, 0, 45, 89)
console.log(arr)

// arr2.pop() //value remove in last index 
// arr2.shift() //value first in first index

// arr2.splice(3, 1)
arr2.splice(3, 1, 55)

console.log(arr2)