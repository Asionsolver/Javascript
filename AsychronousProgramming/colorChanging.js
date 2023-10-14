const start = document.getElementById("start");
const stop = document.getElementById("stop");

const generateColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// const startChangeColor = function () {
//     let intervalId = setInterval(function () {
//         document.body.style.backgroundColor = generateColor();
//     }, 1000);
//     stop.addEventListener('click', function () {
//         clearInterval(intervalId);
//     });
// }

let intervalId;
const startChangeColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = generateColor();
  }
};
const stopChangeColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

start.addEventListener("click", startChangeColor);

stop.addEventListener("click", stopChangeColor);
