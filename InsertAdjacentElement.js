//  appendChild() method adds a child node to the end of the list of children of a specified parent node. Returns the appended node. Recommended.

let createDiv = createElement('div', 'container', 'Hello Programmer. You will create new DOM elements');

let container = document.getElementById('containers');
container.appendChild(createDiv);

let createLi1 = createElement('li', 'list-group-item', 'Six');
let createLi2 = createElement('li', 'list-group-item', 'Seven');
let list = document.getElementById('list');
appends(list, [createLi1, createLi2]);

let createStrong = createElement('strong', 'strong', 'Hello Programmer. You will create strong tag');

let getStrong = document.getElementById('containers');
container.appendChild(createStrong);
// insertAdjacentElement() method inserts a new element adjacent to an existing element in the DOM tree.

list.insertAdjacentElement('beforebegin', createStrong); 
containers.insertAdjacentElement('afterbegin', createLi1); 
containers.insertAdjacentElement('beforeend', createLi2); 
// list.insertAdjacentElement('afterend', div);




function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName);
    tag.className = className || '';
    tag.innerHTML = innerHTML || '';
    return tag;
}

function appends(parent, children) {
    children.forEach(child => parent.appendChild(child));
}



