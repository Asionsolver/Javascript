// window.setTimeout(() => {
//     console.log("Asynchronous Action Part 6");
//     }, 2000);

// global.setTimeout(() => {
//     console.log("Asynchronous Action Part 6");
//     }, 2000);

// setTimeout(() => {
//   console.log("Asynchronous Action Part 6");
// }, 2000);




console.log("Asynchronous Action Part 1");


setTimeout(() => {
  console.log("Asynchronous Action Part 2");
}, 3000);


setTimeout(() => {
  console.log("Asynchronous Action Part 3");
}, 0);


console.log("Asynchronous Action Part 4");
setTimeout(() => {
  console.log("Asynchronous Action Part 5");
}, 1000);


