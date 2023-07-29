function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color){
    this.color = color;
}

Shape.prototype.common= function(){
        console.log("I am a common Method");
    }

var shape = new Shape('red');

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

// method overriding
Square.prototype.common = function(){
    console.log('I am a Modified Common Method of Shape and I am Overriding the Common Method of Shape');
}

var sqr = new Square(10, 'green'); 

function Circle(radius, color){
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

// method overriding
Circle.prototype.common = function(){
    console.log('I am a Modified Common Method of Circle and I am Overriding the Common Method of Shape');
}

var circle = new Circle(10, 'blue');

var shapes = [shape, sqr, circle];

for(var i of shapes){
    i.common();
}

