const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");
// console.log(button);

buttons.forEach(function (button) {
  console.log(button);
    button.addEventListener("click", function (e) {
    // console.log(e)
    // console.log(e.target)
    if(e.target.id === "orange"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "purple"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "red"){
        body.style.backgroundColor = e.target.id;
    }

    if(e.target.id === "indigo"){
        body.style.backgroundColor = e.target.id;
    }
    

    });
});
