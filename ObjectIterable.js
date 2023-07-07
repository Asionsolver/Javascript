// generate for loop
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 0; i < 10; i++) {
//     console.log(number[i]);
// }

// for(let n of number){
//     console.log(n);
// }

// Symbol.iterator() is a function that returns an object with a next() method
// console.dir(number[Symbol.iterator]());

// const numberIterator = number[Symbol.iterator]();
// console.log(numberIterator.next());
// console.log(numberIterator.next());
// console.log(numberIterator.next());


const numbers = {};

// make it iterable

numbers[Symbol.iterator] = function () {
    let n = 0;
    let done = false;
    return{
        next () {
            n += 10;
            if(n == 100){
                    done = true;
                }
            return {
                value: n, 
                done: done
            }
         }
    } 
};

for(let num of numbers){
    console.log(num);
}
