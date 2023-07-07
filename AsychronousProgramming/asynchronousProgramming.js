// What is Synchronous?
// Existing or occurring at the same time.

// What is Synchronous Programming?
// Synchronous basically means that you can only execute one thing at a time.

var a = 1;
var b = 2;

var result = a + b;
console.log(result);

var response = storeResult(result);

if (response.success){
    console.log("The result was stored successfully");
} else {
    console.log("The result was not stored successfully");
}