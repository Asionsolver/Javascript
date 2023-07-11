// let title = document.getElementById('title')  //select by id
// console.log(title)

// let paragraph =document.getElementsByClassName('lead') //select by class
// console.log(paragraph)

// let list = document.getElementsByTagName('li')  //select by tag
// console.log(list)

// let listItemOne = document.getElementsByName('list-item-one') //select by name
// console.log(listItemOne)

// let title = document.querySelector('#title') //select by id
// console.log(title)

// let paragraph = document.querySelector('.lead') //select by class
// console.log(paragraph)

// let paragraphs = document.querySelectorAll('.lead') //select by class
// console.log(paragraphs)

// let list =document.querySelectorAll('li') //select by tag
// console.log(list)

// let listItemOne =document.querySelectorAll('[name^="list-item-one"]') //select by name
// console.log(listItemOne)






// ! How to Loop Throw HTML Collection in Javascript

// let listItem = document.getElementsByTagName('li'); // ? returns node list
// console.log(listItem)


// ? listItem.forEach is not a function. Because listItem is array like data structure not array. So we can't use forEach method.
// listItem.forEach((li,index) => {
//     let text = li.innerHTML;
//     li.innerHtml = `(${index+1}) ${text}`;
    
// })

// ? 1st option

// let listItems = Array.from(listItem) //convert node list to array
// console.log(listItems)

// listItems.forEach((li,index) => {
//     let text = li.innerHTML;
//     li.innerHTML = `(${index+1}) ${text}`;
    
// })


// ? 2nd option

// let listItems = Array.prototype.slice.apply(listItem) //apply is used to convert array like object to array

// listItems.forEach((li,index) => {
//     let text = li.innerHTML
//     li.innerHTML = `(${index+1}) ${text}`
    
// })

// ? 3rd option

// let listItems = [...listItem] //spread operator

// listItems.forEach((li,index) => {
//     let text = li.innerHTML  //returns text node
//     li.innerHTML = `(${index+1}) ${text}` //convert array to string
    
// })

// ? 4th option

// Method 1: Using the for/of loop: The for/of loop is used to loop over values of an iterable object. This includes arrays, strings, nodeLists, and HTMLCollections.
// The syntax of this loop is similar to the for/in loop. The object must be iterable to be used with this loop.

// Syntax:

// for (item of iterable) {
//   // code to be executed
// }


// regular for loop


// for (let i = 0; i < listItem.length; i++) {
//     console.log(listItem[i]);
// }



//  ! Update & Remove any DOM Elements in Javascript 
// let list = document.getElementById('list')

// let firstChild = list.firstElementChild;
// console.log(firstChild)


// ? Update Dom Element

// setTimeout(() => {
//     firstChild.innerHTML = firstChild.innerHTML + ' (Modified)'
//     // firstChild.classList.add('bg-success')
//     firstChild.style.backgroundColor = '#191919'
//     firstChild.style.color = 'red'
// } , 2000)

// ? Remove Dom Element

// setTimeout(() => {
//     list.lastChild.remove()
//     // list.thirdChild.remove()
// }, 1000)

