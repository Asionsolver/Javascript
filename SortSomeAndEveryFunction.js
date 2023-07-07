var person = [{
        name: 'A',
        age: 24
    }, {
        name: 'B',
        age: 21
    }, {
        name: 'C',
        age: 25
    },
    {
        name: 'D',
        age: 28
    },
    {
        name: 'E',
        age: 22
    },
    {
        name: 'F',
        age: 25
    }

]

var arr = [1, 4, 7, 8, 9, 6, 3, 2, 9, 6, 99, 333, 6, 85, 5, 4, 1, 22, 52, 5, 4, 4, -9, -8, -7, -2]
arr.sort(function(a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})
console.log(arr)

person.sort(function(a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})

console.log(person)

var arr2 = [1, 4, 7, 8, 9, 6, 3, 2, -1, 9, 6, 99, 333, 6, 85, 5, 4, 1, 22, 52]

var result1 = arr2.every(function(value) {
    return value % 2 === 0
})
var result2 = arr2.every(function(value) {
    return value > 0
})

console.log('Array all element are even ' + result1)
console.log('Array all element are positive ' + result2)

var result3 = arr2.some(function(value) {
    return value % 2 === 1
})
var result4 = arr2.some(function(value) {
    return value > 0
})

console.log('Array one element are odd ' + result3)
console.log('Array one element are negative ' + result4)