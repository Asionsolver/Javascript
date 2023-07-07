// function myPromise(){
//     return Promise.resolve('Hello World');
// }

// console.log(myPromise());

// async function myPromise(){
//     return 'Hello World';
// }

// console.log(myPromise());   
// myPromise().then((resolve) => console.log(resolve));

// let p1 = Promise.resolve('I am a Resolved Promise'); 

// async function myPromise(){
    // p1.then((resolve) => console.log(resolve));

//     let result = await p1;
//     console.log(result);
// }

// myPromise();

// async function fetchData(){
//     try{
//         let res = await fetch('https://jsonplaceholder.typicode.com/users');

//     let data = await res.json();

//     // console.log(data);

//     let names = data.map((user) => user.name);
//     console.log(names);
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }

// fetchData();

let promises = [Promise.resolve('ONE'), Promise.resolve('TWO'), Promise.resolve('THREE')];

async function promiseAll(){
    let result = await Promise.all(promises);
    console.log(result); 

    // for await(let promise of promises){
    //     console.log(promise);
    // }
}

promiseAll();


