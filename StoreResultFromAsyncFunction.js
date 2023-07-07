// function sayName(name){
//     let result

//     setTimeout(()=>{
//         result = name
//         console.log('I have done my work...')
//     }, 3000)
//      return result
// }

// let output = sayName('John')
// console.log(output)


function sayName(name){
    setTimeout(()=>{
        console.log(name);
        console.log('I have done my work...')
    }, 3000)
}

sayName('John')
