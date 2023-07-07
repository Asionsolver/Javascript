
// ! Variables Concept
let names = ["John", "Jane", "Mary", "Mark", "Bob"];
let index = -1;

let name = names[++index];
setInterval(() => {
  name = names[index++];
  console.log(name, names.length, index);
  if (index === names.length) {
    index = 0;
  }
}, 1000);
