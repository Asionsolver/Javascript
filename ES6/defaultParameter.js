function add(x) {
    return x*x;
}

console.log(add()); // NaN

function sqr(x = 2) {
    return x * x;
}

console.log(sqr()); // 4

console.log(sqr(3)); // 9

function greet(name = 'Ashis', msg = 'Hello') {
    console.log(name.length);
    return `${msg} ${name}`;
}

greet(); // Hello Ashis

greet('Ashis', 'Hi'); // Hi Ashis

greet('Ashis'); // Hello Ashis

greet(undefined, 'Hi'); // Hi Ashis

greet('Ashis', undefined); // Hello Ashis

greet('Ashis', null);