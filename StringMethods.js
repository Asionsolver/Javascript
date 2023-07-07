// var a = 'I am '
// var b = 'Asion'

// var c = a.concat(b)
    // var d = c.substring(5)
    // var e = c.substring(5, 3) //return m
    // var f = c.substr(5, 3) //return Asi

// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(c.charAt(5))
// console.log(c.startsWith('I am'))
// console.log(c.endsWith('I am'))
// console.log(c.endsWith('Asion'))
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())
// console.log('      Asion          '.trim())
// console.log(c.split(' '))

// const a = {
//     name:"Bangladesh",
//     city:"Dhaka",
// }

// const s = "Belgium is not bad country."
// console.log(s.length)

/*

Extracting String Parts
There are 3 methods for extracting a part of a string:

1. slice(start, end)
2. substring(start, end)
3. substr(start, length)

*/


// ? Slice Method

/*
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).
*/
// console.log(s.slice(5,10));
// console.log(s.slice(5));

/*
!Note
* JavaScript counts positions from zero.

* First position is 0.

* Second position is 1.

? If a parameter is negative, the position is counted from the end of the string.

**This example slices out a portion of a string from position -12 to position -6:

*/
let str = "Apple, Banana, Kiwi";
// let part = str.slice(-12, -6);
// console.log(part);

// let part_2 = str.slice(2, -6);
// console.log(part_2);

// let part_3 = str.slice(-5, -12); //return nothing
// console.log(part_3);

// ! If you omit the second parameter, the method will slice out the rest of the string

// let part2 = str.slice(7);
// console.log(part2);

// ! JavaScript String substring()
//substring() is similar to slice().

// ? The difference is that start and end values less than 0 are treated as 0 in substring(). That means that Substring() can not accept negative indexes.


// let part_s1 = str.substring(7, 13);
// console.log(part_s1);

// If you omit the second parameter, substring() will slice out the rest of the string.

// const part_s2 = str.substring(7);
// console.log(part_s2);

// ! JavaScript String substr()
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.
// If you omit the second parameter, substr() will slice out the rest of the string.

// const part_sb1 = str.substr(7, 6);
// const part_sb1 = str.substr(7);
// console.log(part_sb1);

// ! The replace() method replaces a specified value with another value in a string:

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);

/*
Note:

1. The replace() method does not change the string it is called on.

2. The replace() method returns a new string.

3. The replace() method replaces only the first match

4. If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

*/

// * By default, the replace() method replaces only the first match:
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);

// * By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

// let text = "Please visit Microsoft!";
// let newText = text.replace("MICROSOFT", "W3Schools");
// console.log(newText);

// ! Converting to Upper and Lower Case

// * A string is converted to upper case with toUpperCase():

// let text = "Hello World!";
// let text2 = text.toUpperCase();

// console.log(text2);


// * A string is converted to lower case with toLowerCase():

// let text = "Hello World!";
// let text2 = text.toLowerCase();

// console.log(text2);

// * JavaScript String concat(). concat() joins two or more strings:

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);


// * The concat() method can be used instead of the plus operator. These two lines do the same:
// text1 = "Hello" + " " + "World!";
// text2 = "Hello".concat(" ", "World!");


/* 

! Note
1. All string methods return a new string. They don't modify the original string.

Formally said:

2. Strings are immutable: Strings cannot be changed, only replaced.

*/

// * JavaScript String trim(). The trim() method removes whitespace from both sides of a string:

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2);

/*
Extracting String Characters
There are 3 methods for extracting string characters:

1. charAt(position)
2. charCodeAt(position)
3. Property access [ ]
*/

// * JavaScript String charAt(). The charAt() method returns the character at a specified index (position) in a string:

// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log(char);

// * JavaScript String charCodeAt(). The charCodeAt() method returns the unicode of the character at a specified index in a string: The method returns a UTF-16 code (an integer between 0 and 65535).

// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// console.log(char);

// * Property Access
// * ECMAScript 5 (2009) allows property access [ ] on strings:

// let text = "HELLO WORLD";
// let char = text[0];
// console.log(char);

/*
Note
Property access might be a little unpredictable:

1. It makes strings look like arrays (but they are not)
2. If no character is found, [ ] returns undefined, while charAt() returns an empty string.
3. It is read only. str[0] = "A" gives no error (but does not work!)

*/

// let text = "HELLO WORLD";
// let char1 = text[500];
// let char2 = text.charAt(500);

// console.log(typeof char1);
// console.log(typeof char2);

/*
Converting a String to an Array
If you want to work with a string as an array, you can convert it to an array.
*/

// * JavaScript String split(). A string can be converted to an array with the split() method:

let text = "HELLO WORLD";
console.log(text.split(","));    // Split on commas
console.log(text.split(" "));    // Split on spaces
console.log(text.split("|"));    // Split on pipe

// * If the separator is omitted, the returned array will contain the whole string in index [0]. If the separator is "", the returned array will be an array of single characters:
console.log(text.split(""));