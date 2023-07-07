let btn = document.getElementById("btn");
// console.dir(btn);

// btn.onclick = function (e) {
//     console.log(e);
// }

let list = document.getElementById('list');
btn.addEventListener("click", function (e) {
    // console.log(e);
    // alert("Hello");
    let  item = list.lastElementChild.cloneNode(true);
    item.innerHTML = 'Six (new)';
    list.appendChild(item);

})

let box = document.getElementById("box");

box.addEventListener("mousemove", function (e) {
    // console.log(e);
    // document.getElementById('x-value').innerHTML = e.clientX;
    // document.getElementById('y-value').innerHTML = e.clientY;
    // console.log(e.offsetX, e.offsetY);
    document.getElementById('x-value').innerHTML = e.offsetX;
    document.getElementById('y-value').innerHTML = e.offsetY;

    if(e.offsetX === 50 && e.offsetY === 50){
        
        // alert("You win");
    }
}) 