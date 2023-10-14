
async function getAllUsers() {
  try {
    const response = await fetch("https://api.github.com/users/asionsolver");
    const data = await response.json();
    // console.log(response);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUsers();