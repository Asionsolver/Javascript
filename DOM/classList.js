const element = document.getElementById('myDiv');
// console.log(element.classList); // ["red", "bold"]
// console.log(element);



element.classList.add('italic');
// console.log(element.classList); // ["red", "bold", "italic"]
// console.log(element)


element.classList.add('green', 'semi-bold', 'anti-italic');
console.log(element.classList);  
console.log(element)


// element.classList.remove('red');
// console.log(element.classList); // ["bold", "italic"]
// console.log(element)



// console.log(element.classList.contains('bold')); // true
// console.log(element.classList.contains('green')); // false
// console.log(element)
