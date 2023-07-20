let skills = document.getElementsByName("skills");
let result = document.getElementById("result");


let checkedSkills = [];

[...skills].forEach((skill) => {
  skill.addEventListener("change", function (event) {
    // console.log(event.target.value);
    // console.log(event.target.checked);


    if (event.target.checked) {
        checkedSkills.push(event.target.value);
        // console.log(checkedSkills);
        outputSkills(result, checkedSkills);
    } else {
        let index = checkedSkills.indexOf(event.target.value);
        checkedSkills.splice(index, 1);
        // console.log(checkedSkills);
        outputSkills(result, checkedSkills);

        // checkedSkills = checkedSkills.filter((skill) => skill !== event.target.value);
    }

    // document.getElementById(
    //   "show-skills"
    // ).innerHTML = `Your skills are ${event.target.value}`;
  });
});

function outputSkills(parent, skills) {
    let result = "";
    skills.forEach((skill, index) => {
        result += `${index + 1}. ${skill} <br>`;
    });
    parent.innerHTML = result;
}
