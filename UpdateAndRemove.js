//  ! Update & Remove any DOM Elements in Javascript 
let list = document.getElementById('list')

let firstChild = list.firstElementChild;
// console.log(firstChild)


// ? Update Dom Element

// setTimeout(() => {
//     firstChild.innerHTML = firstChild.innerHTML + ' (Modified)'
//     // firstChild.classList.add('bg-success')
//     firstChild.style.backgroundColor = '#191919'
//     firstChild.style.color = 'red'
// } , 2000)

// ? Remove Dom Element

setTimeout(() => {
    // ** First Way to Remove Child
    list.removeChild(firstChild)
    
    // ** Second Way to Remove Child
    // list.removeChild(list.firstElementChild);
    // list.removeChild(list.lastElementChild);

    // * not working this way
    // list.lastChild.remove()
    // console.log(list.lastChild)
}, 1000)
