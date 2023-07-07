// ! using object literal

// var obj = {}
// obj.x = 10
// console.log(typeof obj)
// console.log(obj)

var subjectMarks = {
    math: 92,
    bangla: 85,
    physic: 85,
    chemistry: 95
}

subjectMarks.english = 75

// console.log(subjectMarks)

// console.log(subjectMarks.bangla)
// console.log(subjectMarks.engish)
// console.log(subjectMarks.bangla + subjectMarks.chemistry)
// console.log(subjectMarks['math'])

// var show = 'physic'
// console.log(subjectMarks[show])
// delete subjectMarks.english //totally remove object
// subjectMarks.chemistry = 88
// console.log(subjectMarks)

var obj1 = { a: 23, b: 45 }
var obj2 = { a: 123, b: 45 }
if (obj1.a === obj2.a && obj1.b === obj2.b) {
    console.log(true)
} else {
    console.log(false)
}

// ! using object constructor

// var obj1 = Object()
// obj1.static = 85
// console.log(obj1)

// var obj3 = new Object()
// obj3.programming = 75
// console.log(obj3)
