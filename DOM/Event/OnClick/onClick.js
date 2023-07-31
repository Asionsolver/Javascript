// function changeText() {
//     document.getElementById("title").innerHTML = "Thanks for clicking";
// }

// function changeText(values) {
//     values.innerHTML = "Thanks for clicking";
// }

const button = document.getElementById('title');
button.onclick = function () {
    console.log('clicked');
    button.innerHTML = "Thanks for clicking";
}