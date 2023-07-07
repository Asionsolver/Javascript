const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// ! Merge two arrays using spread operator

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// ! Merge two arrays using concat

const arr4 = arr1.concat(arr2);
console.log(arr4); // [1, 2, 3, 4, 5, 6]

// ! Merge two arrays using push

const arr5 = [];
arr5.push(...arr1);
arr5.push(...arr2);

console.log(arr5); // [1, 2, 3, 4, 5, 6]

// ! Merge two arrays using for loop

const arr6 = arr2.length;
for (let i = 0; i < arr6; i++) {
  arr1[i + arr6] = arr2[i];
}

console.log(arr1);

// ! Merge two arrays using for loop and push

const arr7 = [1, 2, 3];
const arr8 = [4, 5, 6];

const arr9 = [];
for (let i = 0; i < arr7.length; i++) {
  arr9.push(arr7[i]);
}
for (let i = 0; i < arr8.length; i++) {
  arr9.push(arr8[i]);
}
console.log(arr9); 
