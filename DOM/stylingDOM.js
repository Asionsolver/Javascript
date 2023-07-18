let title = document.getElementById("title");
// console.log(title);

// title.style.color = "orange";
// title.style.backgroundColor = "#0C120C";
// title.style.padding = "10px";
// title.style.borderRadius = "10px";
// title.style.boxShadow = "0 0 10px #6d7275";
// title.style.textAlign = "center";
// title.style.fontSize = "50px";
// title.style.fontWeight = "bold";
// title.style.fontFamily = "Arial";
// title.style.textTransform = "uppercase";
// title.style.margin = "10px";
// title.style.display = "inline-block";
// title.style.width = "100%";
// title.style.boxSizing = "border-box";
// title.style.transition = "all 0.5s ease-in-out";
// title.style.cursor = "pointer";

let styleObj = {
    color: "orange",
    backgroundColor: "#0C120C",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 0 10px #6d7275",
    textAlign: "center",
    fontSize: "50px",
    fontWeight: "bold",
    fontFamily: "Arial",
    textTransform: "uppercase",
    listStyle: "none",
    margin: "10px",
    display: "inline-block",
    width: "100%",
    boxSizing: "border-box",
    transition: "all 0.5s ease-in-out",
    cursor: "pointer",
};

let list = document.getElementById("list");

// Object.assign(list.style, styleObj);

[...list.children].forEach((li) => {
    Object.assign(li.style, styleObj);
}
);

