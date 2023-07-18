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

let lastItem = list.lastElementChild.cloneNode(true);
lastItem.innerHTML = "Five";
list.appendChild(lastItem);

// console.log(list.attributes);

// console.log(list.getAttributeNames()) ;
// console.log(list.getAttributeNode('id')) ;
// console.log(list.getAttributeNode('class')) ;
// console.log(list.getAttribute('id')) ;
// console.log(list.id);
// console.log(list.className);
// console.log(list.classList);

// lastItem.id = "last-item";
// lastItem.className = "list-group-item";
// lastItem.setAttribute("id", "last-item");
// lastItem.setAttribute("class", "last-item-class");

let attr = document.createAttribute("title");
attr.value = "I am title";

lastItem.setAttributeNode(attr);