/**
@ Array.prototype.find()
*/

// ! The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const arr = [51, 8, 7, 1, 28];
const found = arr.find(num => num > 10);
console.log(found); // Output: 12

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Bob" }
];

const user = users.find(user => user.name === "Bob");
console.log(user); // Output: { id: 2, name: 'Bob' }

const tasks = [
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: true },
    { id: 3, name: 'Task 3', completed: false }
];

const task = tasks.find(task => task.completed);
console.log(task); // Output: { id: 2, name: 'Task 2', completed: true }


const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}

const result = inventory.find(isCherries);

console.log(result)


const usersInfo = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Bob" }
];


const resultTwo = usersInfo.find(({ name, id }) => name === "Charlie" || id === 3)

console.log(resultTwo)

// ! Using the third argument of callbackFn
// The array argument is useful if you want to access another element in the array, especially when you don't have an existing variable that refers to the array. The following example first uses filter() to extract the positive values and then uses find() to find the first element that is less than its neighbors.

// const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];

// ? Find the first element that is greater than its previous element.
const element = [1, 3, 2, 5, 4];

// Using the array argument to compare the current element with the previous one
const preElement = element.find((num, index, arr) => index > 0 && num > arr[index - 1]);

/**
Step 1: Start Iterating
1. Index 0 (num = 1)
    - index > 0 → false (skipped because there’s no previous element).
    - Callback not executed.

2. Index 1 (num = 3)
    - index > 0 → true (we have a previous element to compare with).
    - num > arr[index - 1] → 3 > 1 → true.
    - The condition is satisfied, so find() returns 3.

3. Index 2 (num = 2)
    - index > 0 → true.
    - num > arr[index - 1] → 2 > 3 → false.
    - Callback not satisfied; move to the next element.

4. Index 3 (num = 5)
    - index > 0 → true.
    - num > arr[index - 1] → 5 > 2 → true.
    - The condition is satisfied, so find() returns 5.

5. Index 4 (num = 4)
    - index > 0 → true.
    - num > arr[index - 1] → 4 > 5 → false.
    - Callback not satisfied;
*/

// ? Find the first number that is greater than the sum of its immediate neighbors.
const elements = [2, 4, 10, 1, 7, 3];

const greaterNumber = elements.find((num, index, arr) => {
    const left = arr[index - 1] || 0;
    const right = arr[index + 1] || 0;

    return num > left + right;
})
console.log(greaterNumber)