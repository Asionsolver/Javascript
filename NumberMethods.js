/*
Number Methods and Properties
Primitive values (like 3.14 or 2014), cannot have properties and methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.
*/

// * The toString() Method
// The toString() method returns a number as a string.

// All number methods can be used on any type of numbers (literals, variables, or expressions):
let x = 123;
let newN = x.toString();// returns 123 from variable x.
console.log(newN);
console.log(typeof newN); // string
console.log((123).toString()); // returns 123 from literal 123.
console.log((100 + 23).toString()); // returns 123 from expression 100 + 23.

// * The toExponential() Method
// toExponential() returns a string, with a number rounded and written using exponential notation.

// A parameter defines the number of characters behind the decimal point:
// * The parameter is optional. If you don't specify it, JavaScript will not round the number.
let x1 = 965654566645;
console.log(x1.toExponential()); 
console.log(x1.toExponential(2)); 
console.log(x1.toExponential(4)); 
console.log(x1.toExponential(6)); 

// * The toFixed() Method
// toFixed() returns a string, with a number rounded and written using fixed notation.
// toFixed() returns a string, with the number written with a specified number of decimals:
// toFixed(2) is perfect for working with money.

let x3 = 9.656;
console.log(x3.toFixed(0)); 
console.log(x3.toFixed(2));
console.log(x3.toFixed(4));
console.log(x3.toFixed(6));

// The toPrecision() Method
// toPrecision() returns a string, with a number written with a specified length:

let x4 = 9.656;
console.log(x4.toPrecision());
console.log(x4.toPrecision(2));
console.log(x4.toPrecision(4));
console.log(x4.toPrecision(6));

// * The valueOf() Method
// valueOf() returns a number as a number.

let x5 = 123;
console.log(x5.valueOf());
console.log((123).valueOf());
console.log((100 + 23).valueOf());

/*
In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

There is no reason to use it in your code.

All JavaScript data types have a valueOf() and a toString() method.
*/

/*
Converting Variables to Numbers
There are 3 JavaScript methods that can be used to convert variables to numbers:

1. The Number() method
2. The parseInt() method
3. The parseFloat() method
These methods are not number methods, but global JavaScript methods.

Global JavaScript Methods
JavaScript global methods can be used on all JavaScript data types.

These are the most relevant methods, when working with numbers:

Method	Description
Number()  -->  Returns a number, converted from its argument.
parseFloat()  -->  Parses its argument and returns a floating point number
parseInt()  -->  Parses its argument and returns an integer
*/

// * The Number() Method
// Number() can be used to convert JavaScript variables to numbers:
// If the number cannot be converted, NaN (Not a Number) is returned.

console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));

// * The Number() Method Used on Dates
// Number() can also convert a date to a number.
// The Number() method returns the number of milliseconds since 1.1.1970.
// The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:


console.log(Number(new Date("1970-01-02")));
console.log(Number(new Date("2017-09-30")));

// * The parseInt() Method
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
// If the number cannot be converted, NaN (Not a Number) is returned.

console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

// * The parseFloat() Method
// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
// If the number cannot be converted, NaN (Not a Number) is returned.
console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));

/*
Number Properties
Property-->Description
MAX_VALUE-->Returns the largest number possible in JavaScript
MIN_VALUE-->Returns the smallest number possible in JavaScript
POSITIVE_INFINITY-->Represents infinity (returned on overflow)
NEGATIVE_INFINITY-->Represents negative infinity (returned on overflow)
NaN	Represents a "Not-a-Number" value
*/

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

// NaN is a JavaScript reserved word indicating that a number is not a legal number.
console.log(Number.NaN);

/*
Number Properties Cannot be Used on Variables
Number properties belongs to the JavaScript's number object wrapper called Number.

These properties can only be accessed as Number.MAX_VALUE.

Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined:


*/
let x6 = 6;
console.log(x6.MAX_VALUE);