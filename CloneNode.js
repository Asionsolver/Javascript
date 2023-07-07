// ! How to Clone Node Include It's Child Elements in Javascript
let list = document.getElementById('list');
// let lastChild = list.lastElementChild.cloneNode(true) // ? true means clone all child elements
// let lastChild = list.lastElementChild.cloneNode() 

lastChild.innerHTML = 'Cloned Node';
list.appendChild(lastChild);