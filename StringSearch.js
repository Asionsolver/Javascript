/*
! JavaScript Search Methods
1. String indexOf()
2. String lastIndexOf()
3. String startsWith()
4. String endsWith()
*/

// * JavaScript String indexOf(). The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate"));

/*
Note
JavaScript counts positions from zero.

0 is the first position in a string, 1 is the second, 2 is the third, ...
*/

// * JavaScript String lastIndexOf(). The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

let str1 = "Please locate where 'locate' occurs!";
console.log(str1.lastIndexOf("locate"));

// ! Both indexOf(), and lastIndexOf() return -1 if the text is not found.

let str2 = "Please locate where 'locate' occurs!";
console.log(str2.lastIndexOf("John"));

// ? The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

// * JavaScript String search(). The search() method searches a string for a specified value and returns the position of the match:

let str3 = "Please locate where 'locate' occurs!";
console.log(str3.search("locate"));

/* 
Did You Notice?
* The two methods, indexOf() and search(), are equal?

* They accept the same arguments (parameters), and return the same value?

* The two methods are NOT equal. These are the differences:

1. The search() method cannot take a second start position argument.
2. The indexOf() method cannot take powerful search values (regular expressions).
3. The search() method returns the position of the first match, while the indexOf() method returns the position of the first character of the match.
*/

// * JavaScript String includes(). The includes() method returns true if a string contains a specified value.

let text = "Hello world, welcome to the universe.";

console.log(text.includes("world"));
console.log(text.includes("world", 12));

// * JavaScript String startsWith(). The startsWith() method returns true if a string begins with a specified value, otherwise false:

console.log(text.startsWith("Hello"));
console.log(text.startsWith("world"));

// * Optional. Default 0. Position to start the search
// * The startsWith() method is case sensitive.
console.log(text.startsWith("world", 5));
console.log(text.startsWith("world",6));

// * JavaScript String endsWith(). The endsWith() method returns true if a string ends with a specified value, otherwise false:
console.log(text.endsWith("universe."));
console.log(text.endsWith("world", 11));
// * The endsWith() method is case sensitive.
console.log(text.endsWith("Universe."));