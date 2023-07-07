function hello1(callback) {
  setTimeout(function () {
    console.log("hello1");
    callback();
  }, 5000);
}

function hello2(callback) {
  console.log("hello2");
  callback();
}

function sayTheHellos(callback) {
  hello1(function () {
    hello2(function () {
      callback();
    });
  });
}

sayTheHellos(function () {
  console.log("all done");
});
