// ! A Promise is a JavaScript object that links producing code and consuming code

const status = false;

console.log('Task 1');

//A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.

// Promises Definition
const promises = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(status){
            resolve('Task 3')
        }else{
            reject('Failed');
        }
    }, 2000);
})

// Promises Call

promises
        .then(function(value){
            console.log(value)
        })
        .catch(function(value){
            console.log(value)
        })


console.log('Task 2');