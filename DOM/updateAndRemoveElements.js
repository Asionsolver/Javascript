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

// Remove Elements and Update Elements

let firstChild = list.firstElementChild;
// console.log(firstChild) ;

setTimeout(() => {
  // firstChild.innerHTML = firstChild.innerHTML + ' (Modified)' ;
  firstChild.innerHTML = " (Modified)";
  firstChild.style.backgroundColor = "aqua";
  firstChild.style.color = "red";
}, 2000);

/**
  *@Note
  The element or node is removed from the Document Object Model (the DOM).
*/

setTimeout(() => {
    // ! The remove() method removes an element (or node) from the document.
  list.lastChild.remove();
}, 4000);

// ? removeChild() Method -> This method removes an element's child.

/**
 *@Note
  The child is removed from the Document Object Model (the DOM).
  However, the returned node can be modified and inserted back into the DOM (See "More Examples").
 */

// function myFunction() {
//     const list = document.getElementById("list");
//     list.removeChild(list.firstElementChild);
//   }

// function myFunction() {
//   const list = document.getElementById("list");
//   // ! If a list has child nodes, remove the first (index 0):
//   if (list.hasChildNodes()) {
//     list.removeChild(list.children[0]);
//   }
// }

function myFunction() {
  const list = document.getElementById("list");
  // ! Remove all child nodes from a list:
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
