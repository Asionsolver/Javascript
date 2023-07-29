// Immediately Invoked Function Expression

(function dataBase() {
  console.log("Database is connected");
})();

(function dataBase(user, password) {
  console.log(`Database is connected with ${user} and ${password}`);
})("root", "1234");

((user, password) => {
  console.log(`Database is connected with ${user} and ${password}`);
})("arrow", "5896");
