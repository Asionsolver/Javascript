function addAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }

    return sum;

}

var c = addAll(5, 6, 9, 3, 8)
console.log(c)

function person(name, age, email) {
    return {
        name: name,
        age: age,
        email: email

    }
    console.log('Ashis') //Unreachable code detected

}

var information = person('Ashis', 56, 'asionsolver274@gmail.com')
console.log(information)