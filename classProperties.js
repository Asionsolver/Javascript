class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.another = function() {
            console.log('another');
        }
    }

    test2 = function() {
        console.log('test2');
    }

    name = 'ASIS'

    draw() {
        console.log('Rectangle draw');
    }


}

let rect = new Rectangle(10, 20);
console.log(rect);
