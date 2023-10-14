// ! The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async task 1");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(() => {
//   console.log("Async task 2 resolve");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async task 1");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Async task 2 resolve");
// });

// const promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "ashis", email: "asionsolver.github.io" });
//   }, 1000);
// });

// promiseTwo.then(function (user) {
//   console.log("user", user);
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     // let error = false;
//     if (!error) {
//       resolve({ username: "Asion", password: "274" });
//     } else {
//       reject("Error: Something went wrong.");
//     }
//   }, 1000);
// });

// promiseThree
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   }).finally(()=>{
//     console.log('The promise is either resolved or rejected.')
//   })

// promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     // let error = true;
//     let error = false;
//     if (!error) {
//       resolve({ username: "Javascript", password: "2747" });
//     } else {
//       reject("Error: Javascript went wrong.");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://api.github.com/users/asionsolver");
//     const data = await response.json();
//     // console.log(response);
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

// fetch("https://api.github.com/users/asionsolver")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });




