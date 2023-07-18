let li = createElement("li", "list-group-item", "Four");

let list = document.getElementById("list");
list.appendChild(li);
// li.appendChild(paragraph1) ;
// console.log(li) ;

// this function will create an element with the given tag name , class name and innerHTML
function createElement(tagName, className, innerHTML) {
  let tag = document.createElement(tagName);
  tag.className = className || "";
  tag.innerHTML = innerHTML || "";
  return tag;
}

// this function will append the children to the parent
function append(parent, children) {
  children.forEach((child) => {
    parent.appendChild(child);
  });
}

// Clone Node Include It's Child Elements

let firstChild = list.firstElementChild;

// ! By default clone not can not clone deeply that means can not not clone element text that why you can use true value. You can clone deeply by passing true as an argument to the cloneNode() method:

let lastChild = list.lastElementChild.cloneNode(true);
lastChild.innerHTML = 'Five' ;
list.appendChild(lastChild) ;



console.log(lastChild);





