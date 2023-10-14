const requestURL = "https://api.github.com/users/asionsolver";

const xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.onreadystatechange = function () {
    
    // console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.response);
        // console.log(typeof data); // string
        // console.log(data.followers)
    }
    
};
// console.log("here");
xhr.send();
