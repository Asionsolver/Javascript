function Shape(color){
    this.color = color;
}

Shape.prototype.common= function(){
        console.log("I am a Method");
    }


function Square(width){
    Shape.call(this, color); // Working --> Super Constructor
    // new Shape(); --> not working
    // Shape() --> not working
    this.width = width;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.draw = function(){
    console.log('I am a Draw Method');
}



Square.prototype.test = function(){
    console.log('I am a Test Method');
}

// var shape = new Shape(); 
var sqr = new Square(10, 'green'); 
