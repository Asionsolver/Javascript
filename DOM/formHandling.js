let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //   console.log("Submitted");
  // console.log(this.length);
    // console.log(this.elements[0]);
    // console.log(this["email"]);

    let formData = {};

    [...this.elements].forEach(element => {
        // console.log(element);
        // console.log(element.value, element.name, element.type);
        if(element.type !== "submit"){
            formData[element.name] = element.value;
        }
    });

    console.log(formData);
    this.reset();
});
