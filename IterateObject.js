 var obj = {
        x: 40,
        y: 54,
        z: 34
    }
    console.log('x' in obj)
    console.log('u' in obj)

for (var i in obj) {
    console.log(i)
    console.log(i + ':' + obj[i]) 
}

var obj2 = { name: 'Rahim', age: 23, city: 'Dhaka', country: 'Bangladesh', phone: '01711111111'}


for (var i in obj2) {
    console.log(i)
    console.log(i + ':' + obj2[i]) 
}