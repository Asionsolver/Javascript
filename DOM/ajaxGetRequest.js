let load = document.getElementById("load");
let post = document.getElementById("post");

const URL = "https://jsonplaceholder.typicode.com/posts";

load.addEventListener("click", function () {
  fetch(URL)
    .then((response) => response.json())
    .then((posts) => {
      //   posts.forEach((item, index) => {
      //     let li = listItemGenerator(item, index+1);
      //     // console.log(li);
      //     post.appendChild(li);
      //   });

      let postList = posts.map((item, index) => 
       listItemGenerator(item, index + 1));
        postList.forEach((item) => post.appendChild(item));
        
    })
    .catch((err) => console.log(err));
});

function listItemGenerator(item, index) {
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `${index}. ${item.title}`;
  return li;
}
