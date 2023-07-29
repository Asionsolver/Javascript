class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    draw() {
        console.log('Rectangle draw');
    }
}

let rect = new Rectangle(10, 20);
console.log(rect);
console.log(typeof Rectangle);  // function