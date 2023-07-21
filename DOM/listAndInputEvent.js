let list = document.getElementById("list");

list.addEventListener("dblclick", function (e) {
    // console.log("double click");
    if(this.contains(e.target)){
        let innerText = e.target.innerText;
        e.target.innerHTML = "";
        let inputBox = createInputBox(innerText);
        e.target.appendChild(inputBox);
        inputBox.addEventListener("keypress", function (e) {
            if(e.key === "Enter"){
                e.target.parentNode.innerHTML = e.target.value;
            }
        });
    }
});

function createInputBox(value) {
    let inp = document.createElement("input");
    inp.type = "text";
    inp.className = "form-control";
    inp.value = value;
    return inp;
}


list.addEventListener("click", function (e) {
    console.log("click");
});
