// ! Event Delegation in DOM Manipulation 

let btn = document.getElementById("btn");

let list = document.getElementById('list');

btn.addEventListener("click", function (e) {
    let item = list.lastElementChild.cloneNode(true);
    item.innerHTML = 'Six (new)';
    list.appendChild(item);
});

// this remove system is not working in newly add list items. But it works in the list items that are already added. This error is because of the event delegation. 
// [...list.children].forEach(li =>{
//     li.onclick = function(e){
//         // console.log(e.target);
//         e.target.remove();
//     }
// }); 



// This is the solution for the above problem.

list.addEventListener("click", function (e) {
    // console.log(this.contains(e.target));
    if(this.contains(e.target)){
        e.target.remove();
    }
    
});