var age = 18;

var name = "Ashis Kumar Pal";

var strings = `jdjflkdslkfjlk
sdfkjlksdkjflksd
sdfkjsdklfjsdklfj
         sdfkjsdklfjsdklfj`;

var templateString = `My name is ${name} and I am ${age} years old. I am ${age >= 18 ? 'an adult' : 'not an adult'}`;

console.log(templateString);

console.log(strings);

console.log(name.padStart(20));
console.log(name.padStart(20, 'a'));
console.log(name.padEnd(20, 'a'));
console.log('s'.repeat(10))