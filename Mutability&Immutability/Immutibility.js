// let name = "John";
// name = "Doe";
// console.log(name); // Doe

// let user = {
//   name: "John",
// };

// let employee = {
//   name: "Doe",
// };
// user = employee;

// console.log(user); // { name: 'Doe' }
// console.log(user.name); // Doe

// user.name = "Smith";
// console.log(user); // { name: 'Smith' }
// console.log(user.name); // Smith
// console.log(employee); // { name: 'Smith' }
// console.log(employee.name); // Smith

// let user1 = [1, 2, 3];
// let employee1 = [4, 5, 6];

// user1 = employee1;
// console.log(user1); // [ 4, 5, 6 ]
// console.log(employee1); // [ 4, 5, 6 ]

// user1[0] = 7;
// user1[1] = 8;
// user1[2] = 9;
// console.log(user1); // [ 10, 8, 9 ]
// console.log(employee1); // [ 4, 8, 9 ]

// user1.push(11);
// console.log(user1); // [ 10, 8, 9, 11 ]
// console.log(employee1); // [ 4, 5, 6 ]

// user1= [54,47,44,41];
// console.log(user1); // [ 54, 47, 44, 41 ]
// console.log(employee1); // [ 7, 8, 9, 11 ]

const user = {
  name: "John",
  age: 30,
  country: "USA",
  city: "California",
  email: "jon@gmail.com",
  phone: "1234567890",
  address: "123 Main St",
  zip: "12345",
  password: "123",
  isAdmin: false,
};

// console.log(Object.isExtensible(user)); // true
// user["spouse"] = "Jane";
// user["children"] = ["Alice", "Bob"];
// console.log(user);
// user['isAdmin'] = true;

// delete user["isAdmin"];
// console.log(user);

// Object.preventExtensions(user);
// console.log(Object.isExtensible(user)); // false

// ! when set preventExtensions, we can't add new properties. But we can change the existing properties and delete properties.

// user["zip"] = "54321";
// console.log(user);

// delete user["zip"];
// console.log(user);

// const hobbies = ["Reading", "Swimming", "Running"];
// console.log(Object.isExtensible(hobbies)); // true

// hobbies.push("Cycling");
// console.log(hobbies);

// hobbies[0] = "Writing";
// console.log(hobbies);

// hobbies.pop();
// console.log(hobbies);

// ! The Object.preventExtensions() static method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It also prevents the object's prototype from being re-assigned.
// ! Shortly: Object.preventExtensions() returns the object being made non-extensible.
// Object.preventExtensions(user);
// console.log(Object.isExtensible(user)); // false
// hobbies[2] = "Coding";
// console.log(hobbies);
// delete hobbies[2];
// console.log(hobbies);


// Object.defineProperty(user, "isMarried", {
//     // value of the property
//     value: false,
//     writable: true,
//     enumerable: true,
//     configurable: true,
// });

// console.log(user);

// const obj = { 
//     name: 'John', 
//     age: 30 
// };

// const copyObj = {
//     name: 'Doe',
//     age: 40
// };


// Object.assign(copyObj, obj);
// console.log(copyObj);
// console.log(obj === copyObj); // false


// const newObjCopy ={...obj};
// console.log(newObjCopy);
// console.log(obj === newObjCopy); // false

// Object.seal(user);
// console.log(Object.isSealed(user)); // true

// const sealUser = Object.seal(user);
// console.log(sealUser === user); // true


// user.isMarried = true;
// console.log(user); // add new property is not allowed
// user["isMarried"] = true;
// console.log(user); // add new property is not allowed
// delete user["isAdmin"];
// console.log(user); // delete property is not allowed

// user["zip"] = "54321";
// console.log(user); // change property is allowed
// user["name"] = "Smith";
// console.log(user); // change property is allowed

// This freezing called shallow freezing. But they can not freeze the nested objects. That means we can change the nested objects. For example, if we have an object inside an object, we can change the properties of the inner object.
// Object.freeze(user);
// console.log(Object.isFrozen(user)); // true
// const frozenUser = Object.freeze(user);
// console.log(frozenUser === user); // true


// user.address = "123 Main Stddd";
// console.log(user); // change property is not allowed
// user["isMarried"] = true;   
// console.log(user); // add new property is not allowed
// delete user["isAdmin"];
// console.log(user); // delete property is not allowed


// ! Object.preventExtensions() = allows to change the existing properties and delete properties. But we can't add new properties.
// ! Object.seal() = allows to change the existing properties. But we can't add new properties and delete properties.
// ! Object.freeze() = doesn't allow to change the existing properties, add new properties and delete properties.

const config = {
    "db": "mongodb",
    "port": 3000,
    "host": "localhost",
    "admin": {
        "name": "John",
        "rights": ["create", "delete", "update"],
        "role": {
            "name": "admin",
            "rights": ["read", "write", "delete"]
        }

    }
}

// const freezeConfig = Object.freeze(config);
// console.log(freezeConfig);
// config["port"] = 4000;
// console.log (config); // change property is not allowed
// config["admin"]["name"] = "Smith";
// console.log (config); // change property is allowed
// config["admin"]["rights"].push("read");
// console.log (config); // change property is allowed

// Deep freeze

let deepFreeze = (obj) => {
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === "object") {
            deepFreeze(obj[key]);
        }
    });
    Object.freeze(obj);
}

// deepFreeze(config);
// config["port"] = 4000;
// console.log (config); // change property is not allowed

// config["admin"]["name"] = "Smith";
// console.log (config); // change property is not allowed

// config["admin"]["rights"].push("read");
// console.log (config); // change property is not allowed

// config["admin"]["role"]["rights"].push("read");
// console.log (config); // change property is not allowed

// We can not unfreeze the object. Once we freeze the object, we can not change the properties of the object. We can not add new properties and delete properties. We can not unfreeze the object. We can not freeze the object partially. We can freeze the object deeply. That means we can freeze the nested objects

let humanSenses = ["sight", "hearing", "smell", "taste", "touch"];
Object.freeze(humanSenses);
humanSenses.push("echolocation");
console.log(humanSenses); // change property is not allowed



