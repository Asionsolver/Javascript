var n = 11

function change(n){  //pass by value 
    n = n + 100
    console.log(n)
}

change(n)
console.log(n)

var obj = {
    a:10,
    b:20
}

function changeObj(obj){   //pass by reference
    obj.a = obj.a + 100,
    obj.b = obj.b + 100
    console.log(obj)
}

changeObj(obj)
console.log(obj)


