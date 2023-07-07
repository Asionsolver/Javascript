let title = document.getElementById('title');

// title.style.color = 'Orange';
// title.style.fontSize = '50px';
// title.style.background = '#000';

let styleObj = {
    background: '#ffc9c9',
    color: '343a40',
    fontSize: '50px',
    border: '1px solid #6741d9'
}

let list = document.getElementById('list');

[...list.children].forEach(li => Object.assign(li.style, styleObj));
Object.assign(list.style, styleObj);