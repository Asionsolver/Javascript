const display = document.getElementById("display");

function getData() {
  fetch("http://127.0.0.1:5500/API/FetchAPI/data.txt")
    .then((res) => res.text())
    .then((data) => {
        console.log("This is called after the fetch is done.")
      display.innerHTML = data;
    });

    console.log('hello world!')
}
