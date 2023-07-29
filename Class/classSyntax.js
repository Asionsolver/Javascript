class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    draw(){
        console.log('Rectangle is drawn');
    }
}

let rect = new Rectangle(10, 20);
console.log(rect.height);
console.log(rect.width);
rect.draw();

console.log(typeof Rectangle);  // function

