// function testMe() {
//     console.log(this);
// }

// testMe(); // Window

// let obj = {
//     testMe: 'testMe',
//     testMe2: function() {
//         console.log(this);
//     }
// };

// obj.testMe2(); // obj

// let obj = {
//     testMe: 'testMe',
//     print: () => {
//         console.log(this);
//     }
// };

// obj.print();

// let obj2 = {
//   name: "Ashis",
//   print: function () {
//     console.log(this.name); // Ashis
//     setTimeout(function () {
//       console.log(`Hello ${this.name}`);
//     }, 1000);
//   },
// };

// obj2.print(); // Hello undefined

// let obj4 = {
//   name: "Ashis",
//   print: function () {
//     let self = this;

//     setTimeout(function () {
//       console.log(`Hello ${self.name}`);
//     }, 1000);
//   },
// };

// obj4.print(); // Hello Ashis

// let obj6 = {
//   name: "Ashis",
//   print: function () { 
//     setTimeout(function () {
//         console.log(`Hello ${this.name}`);
//       }.bind(this), 1000);
//   },
// };

// obj6.print();

let obj5 = {
    name: "Ashis",
    print: function () { 
      setTimeout(() => {
        console.log(`Hello ${this.name}`);
      }, 1000);
    },
  };
  
  obj5.print();
  

