// ! The values are written as name:value pairs.(name is the key and value is the value, name and value are separated by a colon (:))
let car ={
    name: "Ford",
    year: 2018,
    color: "red",
    model:500,
    price: 5000000,
    weight: 1000,
    "engine type": "v8",  // multiword property name must be quoted

    start: function(){
        console.log("Car started");
    },
    stop: function(){
        console.log("Car stopped");
    },

    drive: function(){
        console.log("Car is driving");
    }
};

// car.engine type = "v6"; // SyntaxError: Unexpected identifier
// car["engine type"] = "v6";
let engineType = "engine type";
// car[engineType] = "v4";

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

/*

In the example above, this refers to the person object.

I.E. this.firstName means the firstName property of this.

I.E. this.firstName means the firstName property of person.

*/

// console.log(car.color);
// console.log(car["color"]);
// car.start();

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log( bag.apple ); // 5 if fruit="apple"