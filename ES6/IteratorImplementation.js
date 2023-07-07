const myNumbers = {};

// make it iterable this object

myNumbers[Symbol.iterator] = function () {
    let currentValue = 0;
    let done = false;

    return {
        next() {
            currentValue += 1;
            if (currentValue == 10) {
                done = true;
            }
            return {
                value : currentValue,
                done: done
            }
        }
    }
}

for (let i of myNumbers) {
    console.log(i);
}