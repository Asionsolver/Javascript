const button = document.querySelector("#button");
const counter = document.querySelector("#display");
let number = 0;

button.addEventListener("click", () => {
  number++;
  // console.log(number);
  counter.textContent = number;
});
