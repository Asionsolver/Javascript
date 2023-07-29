// let title = document.getElementById("title");
// let title = document.getElementById("title").className;
// let title = document.getElementById("title").id;
// let title = document.getElementById("title").innerHTML;
// let title = document.getElementById("title").textContent;
// let title = document.getElementById("title").getAttribute("class");
// let title = document.getElementById("title").getAttribute("id");
// let title = document.getElementById("title").setAttribute("class", "heading test");
// console.log(title);

// title.style.background = "white";
// title.style.color = "black";
// title.style.padding = "20px";
// title.style.display = "inline-block";
// title.style.border = "4px solid aqua";
// title.style.borderRadius = "5px";

// console.log(title.innerText);
// console.log(title.textContent);

// let title = document.querySelector('h4');
// console.log(title);
// let input = document.querySelector('input[type=password]');

// let list = document.querySelector('.list');

let listItem = document.getElementsByClassName("list-item");
// console.log(listItem);

// listItem.forEach((item) => {
//   console.log(item);
// });

Array.from(listItem).forEach((item) => {
  console.log(item);
});

const convertedArray = Array.from(listItem);
// console.log(convertedArray);

convertedArray.forEach((item) => {
  item.style.color = "red";
});
