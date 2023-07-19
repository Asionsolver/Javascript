let btn = document.getElementById("btn");

// btn.onclick = function(event) {
//     // alert('ADD ME CLICKED')
//     console.log(event)
// }

let list = document.getElementById("list");

btn.addEventListener("click", function (event) {
  // console.log(event)
  let item = list.lastElementChild.cloneNode(true);
  item.innerHTML = `<span>3</span>LIst Item ADD`;
  list.appendChild(item);
});

// ! Event Delegation Problem

// [...list.children].forEach((li) => {
//   li.addEventListener("click", function (event) {
//     // console.log(event.target);
//     event.target.remove();
//   });
// });



// ! Event Delegation Solution

list.addEventListener("click", function (event) {
  //   console.log(event.target);
  console.log(this.contains(event.target));
  // if (event.target.tagName === "LI") {
  //     event.target.remove();
  // }

    if (this.contains(event.target)) {
        event.target.remove();
    }
});
