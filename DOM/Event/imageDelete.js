const remove = document.querySelector("#images");
remove.addEventListener("click", function (e) {
  //   console.log(e.target);
  //   console.log(e.target.parentNode);
  //   console.log(e.target.tagName);

  //   let removeIt = e.target.parentNode;


  // Optimal way
  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
  // 1st way
  //   removeIt.remove();

  // 2nd way
  // removeIt.parentNode.removeChild(removeIt);
});
