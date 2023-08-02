const name = 'Ashis_Kumar-Paul';
const repoCount = 20;
const isLogged = true;

console.log(name.length);
console.log(name.substring(0, 5));
console.log(name.substring(6, 11));
console.log(name.slice(0, 5));


// const gameName = new String('PUBG');
// console.log(gameName);
// console.log(typeof gameName);
// console.log(gameName.length);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toLowerCase());
// console.log(gameName);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('U'));


// Old Way - Not Recommended
// console.log('Name: ', name + '\nRepo Count: ', repoCount + '\nIs Logged: ', isLogged); 

//! Template String or Template Literal (ES6) - is recommended
// console.log(`Name: ${name}\nRepo Count: ${repoCount}\nIs Logged: ${isLogged}`); 