// const sayAshis = function () {
//     console.log('Ashis');
// }

// const sayHello = function () {
//     console.log('Hello');
// }

const eligibles = function () {
    document.querySelector('#eligible').innerHTML = 'Ashis.';
}

const confirmation = setTimeout(eligibles, 2000);

document.querySelector("#stop").addEventListener('click', function () {
    clearTimeout(confirmation);
    console.log('Stopped');
});