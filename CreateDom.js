// ! Create DOM Elements in Javascript

// ? This is not write way to create DOM Elements

// let li = document.createElement('li')
// li.className = 'list-group-item'
// console.log(li)
// console.dir(li)

// li.setAttribute('title','I am fifth list item')
// li.innerHTML = 'Six'

// let list = document.getElementById('list')
// list.appendChild(li)


// ? This is write way to create DOM Elements

// document.getElementsByClassName('container')[0].appendChild(div);

// or

// let container = document.getElementById('containers');
// container.appendChild(div);


let li = createElement('li','list-group-item','Six')
// li.setAttribute('title','I am fifth list item')
let list = document.getElementById('list')
list.append(li)


// let paragraph = createElement('p', 'lead', 'This is a paragraph');
// let div = createElement('div');
// list.append(div, paragraph);


// document.getElementsByClassName('container')[0].appendChild(div);

// or

// let container = document.getElementById('containers');
// container.appendChild(div);

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName);
    tag.className = className || '';
    tag.innerHTML = innerHTML || '';
    return tag;
}

function append(parent, children) {
    children.forEach(child => parent.appendChild(child));
}
