// ! Throw, and Try...Catch...Finally

// * The try statement defines a code block to run (to try).
try {
    adddlert("Welcome guest!");
}
// * The catch statement defines a code block to handle any error.
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}
/*
The try statement allows you to define a block of code to be tested for errors while it is being executed.

The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

The JavaScript statements try and catch come in pairs:

try {
Block of code to try
}
catch(err) {
Block of code to handle errors
}

! JavaScript Throws Errors
When an error occurs, JavaScript will normally stop and generate an error message.

The technical term for this is: JavaScript will throw an exception (throw an error).

! JavaScript will actually create an Error object with two properties:
  * name and 
  * message.
*/

/*
! The throw Statement
* The throw statement allows you to create a custom error.

Technically you can throw an exception (throw an error).

* The exception can be a JavaScript String, a Number, a Boolean or an Object:

throw "Too big";    // throw a text
throw 500;          // throw a number
throw true;         // throw a boolean
throw {name: "John"}; // throw an object

? If you use throw together with try and catch, you can control program flow and generate custom error messages.
*/