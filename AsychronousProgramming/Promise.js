// let p1 = new Promise((resolve, reject)=>{

// })

// console.log(p1)

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 5000, 'One')

// })

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 3000, 'Two')

// })

// // console.log(p1)
// // console.log(p2)

// p1.then((v)=>{
//     console.log(v)
// })

// p2.then((v)=>{
//     console.log(v)
// })

function getIphone(isPassed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPassed) {
        resolve("I have got an IPHONE 15 PRO MAX");
      } else {
        reject(new Error("You have failed"));
      }
    }, 5000);
  });
}

// console.log(getIphone(true));

getIphone(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.message);
  });


  
