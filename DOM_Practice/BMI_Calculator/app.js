const form = document.querySelector("form");

// this use case will give you empty value because the value is empty when the page loads
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight ${weight}`;
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `Your BMI is ${bmi}`;
    if(bmi < 18.5){
        result.innerHTML += ` and You are underweight`;
        }else if(bmi >= 18.5 && bmi < 25){
        result.innerHTML += ` and You are normal`;
        }else if(bmi >= 25 && bmi < 30){
        result.innerHTML += ` and You are overweight`;
        }else if(bmi >= 30){
        result.innerHTML += ` and You are obese`;
        }
  }

  

});
