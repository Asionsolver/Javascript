function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color){
    this.color = color;
}

Shape.prototype.common= function(){
        console.log("I am a Method");
    }


function Square(width, color){
    Shape.call(this, color);
    this.width = width;
}

extend(Square, Shape);

Square.prototype.draw = function(){
    console.log('I am a Draw Method');
}



Square.prototype.test = function(){
    console.log('I am a Test Method');
}

var sqr = new Square(10, 'green'); 

function Circle(radius, color){
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

circle = new Circle(10, 'red');
