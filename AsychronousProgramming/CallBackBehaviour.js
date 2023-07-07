let arr  = [1, 2, 3, 4]

// let sqrArr = arr.map( v => v*v);

// console.log(sqrArr);


// function asyncMap(arr, cb) {
//   return arr.map(v => {
//     setTimeout(cb,0)
//   })
// }


// let qbArr = asyncMap(arr, v => v*v*v);
// console.log(qbArr);

function asyncMap(arr, cb) {
      return arr.map(v => {
        // setTimeout(cb,0)
        // setTimeout(cb.bind(null, v),0) //First way
        setTimeout(()=>cb(v),0) //Second way

      })
    }
    
    
    let qbArr = asyncMap(arr,v =>{
        console.log(v);
    });
    console.log(qbArr);