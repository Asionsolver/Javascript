// type of event, timestamp
// defaultPrevented
// target
// toElement
// srcElement
// currentTarget
// clientX, clientY
// offsetX, offsetY
// pageX, pageY
// screenX, screenY
// altKey, ctrlKey, shiftKey, metaKey, keyCode,charCode, keyBoardEvent


// document.getElementById("owl").onclick = function () {
//     alert("Owl");
//   };


// Event Propagation has 2 contexts
// 1. Bubbling( default)
// 2. Capturing

// Event Propagation Example

const images = document.getElementById("images");
const owl = document.getElementById("owl");

images.addEventListener("click", function (e) {
   console.log("click inside the ul");
}, false);

owl.addEventListener("click", function (e) {
   console.log("owl clicked");
    e.stopPropagation();
}, false);

// Preventing Default Behavior
const google = document.getElementById("google");
google.addEventListener("click", function (e) {
    console.log("google clicked");
    e.preventDefault();
    e.stopPropagation();
}, false);



// attachEvent() method
