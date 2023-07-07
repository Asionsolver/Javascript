// ! How to Deal with Attributes in DOM Manipulation in Javascript


let list = document.getElementById('list');
let lastItem = list.lastElementChild.cloneNode(true) // ? true means clone all child elements
//
// console.log(list.attributes);

// 
// console.log(list.getAttributeNames());

//
// console.log(list.getAttribute('class'));

//
// console.log(list.getAttributeNode('class'));

// ? set Attribute
// lastItem.setAttribute('class', 'last-item')
// lastItem.id = 'last-item'
// lastItem.className = 'last-item'
// lastItem.classList.add('last-item')

let attr = document.createAttribute('title')
attr.value = 'This is a title';

lastItem.setAttributeNode(attr);