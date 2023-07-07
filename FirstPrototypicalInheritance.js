function Shape(){

}

Shape.prototype = {
    common: function(){
        console.log("I am a Method");
    }
}

function Square(width){
    this.width = width;
}

Square.prototype = Object.create(Shape.prototype);

Square.prototype.draw = function(){
    console.log('I am a Draw Method');
}

var shape = new Shape(); // shape -> Shape -> Object
var sqr = new Square(10); // sqr -> Square -> Object

//! our focus: sqr -> Square -> shape -> Object

function circle(){

}

circle.prototype = Object.create(Shape.prototype);

var cir = new circle();