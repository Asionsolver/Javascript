// const delay = s => new Promise(resolve => setTimeout(resolve, s * 1000));

// delay(2).then(() => console.log('2 seconds delay'));
// delay(1).then(() => console.log('1 second delay'));
// delay(3).then(() => console.log('3 seconds delay'));
// delay(4).then(() => console.log('4 seconds delay'));
// delay(5).then(() => console.log('5 seconds delay'));

// let p1 = Promise.resolve('This is Resolved Promise'); // Promise.resolve() is used to create a resolved promise
// p1.then((resolve) => console.log(resolve));

// let p2 = Promise.reject('This is Rejected Promise'); // Promise.reject() is used to create a rejected promise

// p2.catch((reject) => console.log(reject));

// Promise.all() is used to run all the promises in parallel
// let  p3 = Promise.resolve('This is Promise 1');
// let  p4 = Promise.resolve('This is Promise 2');
// let  p5 = Promise.resolve('This is Promise 3');

// let promiseArray = [p3, p4, p5];

// Promise.all(promiseArray)
//     .then(arr => {
//         console.log(arr)
//     });

let p6 = new Promise((resolve) => {
    setTimeout(resolve, 5000, 'ONE');
});

let p7 = new Promise((resolve) => {
    setTimeout(resolve, 3000, 'TWO');
});

let p8 = new Promise((resolve) => {
    setTimeout(resolve, 1000, 'THREE');
});

let promiseArray = [p6, p7, p8];

Promise.all(promiseArray)
    .then(arr => {
        console.log(arr)
    });

Promise.race(promiseArray)
    .then(arr => {
        console.log(arr)
    });

