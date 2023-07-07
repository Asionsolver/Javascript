var obj1 ={a:23,b:45}
var obj2 ={a:23, b:45}

if(obj1.a === obj2.a && obj1.b === obj2.b){
    console.log(true)
}else{
    console.log(false)
}

// Trick: Comparing Object

// console.log(obj1);
// console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));