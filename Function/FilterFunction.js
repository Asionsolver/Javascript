 var arr = [8, 6, 9, 3, 5, 4, 7, 6, 3, 2]

  var filterArray = arr.filter(function(value) {
      //  return value > 5
      //  return value < 5
      //  return value % 2 == 0
      //  return value % 2 == 1
      return value % 3 == 0
  })

  console.log(filterArray)

//  function myFilter(arr, cb) {
//      var newArray = []
//      for (var i = 0; i < arr.length; i++) {

//          if (cb(arr[i], i, arr)) {
//              newArray.push(arr[i])
//          }

//      }
//      return newArray
//  }
//  var resultEven = myFilter(arr, function(value) {
//      return value % 2 === 0

//  })

//  console.log('Original array is ' + '[' + arr + ']')
//  console.log('The result of even number is ' + '[' + resultEven + ']')
//  console.log(" ")
//  var resultOdd = myFilter(arr, function(value) {
//      return value % 2 === 1

//  })

//  console.log('Original array is ' + '[' + arr + ']')
//  console.log('The result of odd number is ' + '[' + resultOdd + ']')
//  console.log(" ")

//  var resultGreaterThree = myFilter(arr, function(value) {
//      return value > 3

//  })


//  console.log('Original array is ' + '[' + arr + ']')
//  console.log('The result of greater than three number is ' + '[' + resultGreaterThree + ']')
//  console.log(" ")

//  var resultLessFour = myFilter(arr, function(value) {
//      return value < 4

//  })

//  console.log('Original array is ' + '[' + arr + ']')
//  console.log('The result of less than four number is ' + '[' + resultLessFour + ']')
//  console.log(" ")

const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 }
];

const studentGrades = students.filter(student => student.grade >= 90);
console.log(studentGrades)// [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]