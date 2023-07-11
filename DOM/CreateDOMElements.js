// let li = document.createElement('li') ;

// li.className = 'list-group-item' ;
// li.setAttribute('title' , 'I am a title') ;
// li.innerHTML = 'Four' ;
let li = createElement('li' , 'list-group-item' , 'Four') ;

let paragraph1 = createElement('p' , 'text-success' , 'I am a paragraph') ;
let paragraph2 = createElement('p' , 'text-success' , 'I am a paragraph 2') ;

let div = createElement('div' , 'container' , '') ;
append(div , [paragraph1 , paragraph2]) ;
console.log(div) ;

let containers = document.getElementById('topic') ;
// console.log(containers) ;
containers.appendChild(div) ;



let list = document.getElementById('list') ;
list.appendChild(li) ;
// li.appendChild(paragraph1) ;

// console.log(li) ;

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName) ;
    tag.className = className || '';
    tag.innerHTML = innerHTML || '';
    return tag ;
}

function append(parent , children) {
    children.forEach(child => {
        parent.appendChild(child) ;
    });
}


