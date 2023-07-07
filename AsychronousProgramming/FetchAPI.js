const BASE_URL = "https://jsonplaceholder.typicode.com";

// fetch(`${BASE_URL}/users/1`)
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data)
//         return Promise.resolve('Somethings')
//     })
//     .then(str =>{
//         console.log(str);
//         return Promise.resolve('Another Process')
//     })
//     .then(another=>{
//         console.log(another)
//     })
//     .catch(error=>{
//         console.log(error)
//     })

function getRequest(url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        
        xhr.onreadystatechange = function(e){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    let response = JSON.parse(xhr.response);
                    resolve(response);
                }else{
                    reject(new Error('Error Occured'));
                }
            }
        }
        xhr.send();
        
    })
}


// let res =  getRequest(`${BASE_URL}/users/1`)

// console.log(res)


 getRequest(`${BASE_URL}/users/1`)
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        console.log(error)  
    });