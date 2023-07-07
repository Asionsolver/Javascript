 // appendChild() method adds a child node to the end of the list of children of a specified parent node. Returns the appended node. Recommended.

// let div = document.createElement('div');
// div.className = 'container';
// div.innerHTML = '<h1>Hello Programmer. You will create new DOM elements</h1>';
// console.log(div);

let createDiv = createElement('div', 'container', '<h1>Hello Programmer. You will create new DOM elements</h1>');

let containers = document.getElementById('containers');
containers.appendChild(createDiv);

let createLi = createElement('li', 'list-group-item', 'Six');

let list = document.getElementById('list');
list.appendChild(createLi);


let createParagraph1 = createElement('p','lead','This is a paragraph1');
// console.log(createParagraph1);

let createParagraph2 = createElement('p','lead','This is a paragraph1');
// console.log(createParagraph2);

let emptyDiv = createElement('div');
appends(emptyDiv, [createParagraph1, createParagraph2]);
// console.log(emptyDiv);



let container = document.getElementById('containers');
// console.log(container);
container.appendChild(emptyDiv);

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName);
    tag.className = className || '';
    tag.innerHTML = innerHTML || '';
    return tag;
}

function appends(parent, children) {
    children.forEach(child => parent.appendChild(child));
}