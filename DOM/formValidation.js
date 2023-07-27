let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //   console.log("Submitted");
  // console.log(this.length);
    // console.log(this.elements[0]);
    // console.log(this["email"]);
    let formValid = false;
    let formData = {};

    [...this.elements].forEach(element => {
        // console.log(element);
        // console.log(element.value, element.name, element.type);
        if(element.type !== "submit"){
            formValid = formValidation(element);
            if(formValid){
                formData[element.name] = element.value;
            }else{
                element.classList.add("is-invalid");
                alert(`Please enter a valid ${element.name}`);
                return; 
            }

            formData[element.name] = element.value;
        }
    });

    if(formValid){
        console.log(formData);
        this.reset();
    }

   
});

function formValidation(element){
    if(!element.value){
        return false;
    }

    if(element.type === "email"){
        if(!element.value.includes("@")){
            return false;
        }
    }

    if(element.type === "password"){
        if(element.value.length < 8){
            return false;
        }
    }



    return true;
}