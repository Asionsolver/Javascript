let btn = document.getElementById("btn");

// btn.onclick = function(event) {
//     // alert('ADD ME CLICKED')
//     console.log(event)
// }

let list = document.getElementById("list");

btn.addEventListener('click', function(event) {
    // console.log(event)
    let item = list.lastElementChild.cloneNode(true);
    item.innerHTML = `<span>3</span>LIst Item ADD`;
    list.appendChild(item);
    
})

let box = document.getElementById("box");

box.addEventListener("mousemove", function (event) {
  // console.log(event)
  // box.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 40)`
  // document.getElementById('x-value').innerHTML = event.clientX;
  // document.getElementById('y-value').innerHTML = event.clientY;

  document.getElementById("x-value").innerHTML = event.offsetX;
  document.getElementById("y-value").innerHTML = event.offsetY;

  if (event.offsetX === 50 && event.offsetY === 50) {
    box.style.backgroundColor = "red";
  }
});


