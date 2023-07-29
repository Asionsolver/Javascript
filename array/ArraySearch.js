var arr = [4, 5, 6, 7, 8, 9, 1, 2, 3, 10, 11, 12, 13, 14]

var find = 17
var isFound = false

for (var index = 0; index < arr.length; index++) {
    if (arr[index] === find) {
        console.log(find + ' Data found at Index is ' + (index + 1))
        isFound = true
        break;
    }
}

if (!isFound) {
    console.log('Data not found...')
}