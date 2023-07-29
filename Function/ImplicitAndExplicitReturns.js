//An implicit return is when the function returns a value without using the return keyword. For example:
// let func = x => x + x;
// func(5)
//returns 10

  //In this case, the function square returns the square of the input value x. The return keyword is not used. However, the function still returns a value. This is because the function body is wrapped in curly braces. The value of the last expression in the function body is returned. In this case, the value of the expression x * x is returned.
  
    // An explicit return is when the function returns a value using the return keyword. For example:
    // let func2 = (x, y) => { return x - y; }; 
    // notice the brackets, and the explicit statement of return
    
    // func2(5,4)
    //returns 1

  //In this case, the function square calculates the square of the input value x, stores it in the variable result, and then returns the value of result using the return keyword.The return keyword is used to explicitly return a value from the function.


// In both cases, the function square takes an input x and returns its square. The difference is that in the implicit return, the value is returned directly, while in the explicit return, the value is first stored in a variable result and then returned using the return keyword.
  

// function makeDrink(name, price) {
//     return {
//       name,
//       price
//     };
//   }
  
//   const drink = makeDrink('Lemonade', 299);
//   // { name: 'Lemonade', price: 299 }
//   console.log(drink);
// const cart = [];

// function addToCart(drink) {
//   cart.push(drink);
// }

// addToCart('Lemonade');

// ❌ Throws an Error
const makeDrink = (name, price) => {
    name,
    price
  };
//   There’s a little trick involved that does in fact allow us to do this, but we need to wrap the object braces {} inside parenthesis:
  
  // ✅ Works nicely!
//   const makeDrink = (name, price) => ({
//     name,
//     price
//   });