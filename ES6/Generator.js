const obj ={
    start: 1,
    end:5,
    [Symbol.iterator]: function* (){
        let currentValue = this.start;
        while(currentValue <= this.end){
            yield currentValue++;
        }
    }
}

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// Implementing a generator function

// function* generator(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// let iterate = generator() // returns an iterator
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

let arr = [1,2,3,4,5]

function* generator(collection){
    for(let i=0;i<collection.length;i++){
        yield collection[i]
    }
}

let iterate = generator(arr) // returns an iterator
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())


