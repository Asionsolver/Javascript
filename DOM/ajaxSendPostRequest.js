let formPost = document.getElementById("post-form");
let post = document.getElementById("post");
let URL = "https://jsonplaceholder.typicode.com/posts";

formPost.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(this.title);
  // console.log(this.body);
  let title = this.title.value || "default title";
  let body = this.body.value || "default body";

  if (title && body) {
    let postObj = {
      userId: 100,
      title,
      body,
    };

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObj),
    })
      .then((res) => res.json())
      .then((data) => {
        let li = listItemGenerator(data);
        post.appendChild(li);
        this.reset();
      })
      .catch((err) => console.log(err));
  } else {
    alert("Please enter title and body");
  }
});

function listItemGenerator(item, index) {
  let li = document.createElement("li");
  li.className = "list-group-item my-3 my-3";
  li.innerHTML = `${item.id} - ${item.title} By User ID ${item.userId}`;
  return li;
}
