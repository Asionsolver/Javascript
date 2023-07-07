// update array

const arr1 = new Array(5);

// array fill manual way

for( let i = 0; i < arr1.length; i++){
    arr1[i] = false;
}

console.log(arr1);

// array fill with fill method

arr2 = new Array(5);
arr2.fill(false);

console.log(arr2);

//fill array and update

const response = new Array(10);

response.fill(false);

for (let index = 0; index < response.length; index++) {
    const random = Math.floor(Math.random() * 10 + 1);

    // condition to update array
    response[index] = random > 5? 'x': 'o';
}

console.log(response);