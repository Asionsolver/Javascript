// array.sort() method sort alphabetically short not numerical short

const arr = [7, 9, 1, 10, 2, 3,11, 8, 4, 5, 6];

// const compare = function(a, b){
//     return a - b;
// };

// const sortedArr = arr.sort(compare);
 
// console.log(sortedArr);

// const toShort = arr.toSorted(compare);
// console.log(toShort);


const cars = [
    {type: "Volvo", year: 2016},
    {type: "Saab", year: 2001},
    {type: "BMW", year: 2010}
];

// const year = function(a, b){
//     return a.year - b.year;
// }

// const sortedCars = cars.sort(year);

// console.log(sortedCars);


const type = function(a, b){
    const x = a.type.toLowerCase();
    const y = b.type.toLowerCase();
    if(x < y){
        return -1;
    }
    if(x > y){
        return 1;
    }

    return 0;
}

// const sortedCars = cars.sort(type);

// console.log(sortedCars);

const types = cars.toSorted(type);
console.log(types);
console.log(cars);

