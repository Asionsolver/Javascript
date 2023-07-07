function shape(){

}

shape.prototype.common= function(){
        console.log("I am a Method");
    }


function Square(width){
    this.width = width;
}

Square.prototype = Object.create(shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.draw = function(){
    console.log('I am a Draw Method');
}

// Resetting the Constructor
// Square.prototype = {
//     test: function(){
//         console.log('I am a Test Method');
//     }   
// }

Square.prototype.test = function(){
    console.log('I am a Test Method');
}

var shape = new shape(); // shape -> Shape -> Object
var sqr = new Square(10); // sqr -> Square -> Object

// sqr -> square -> shape -> Object

// function circle(){

// }

// circle.prototype = Object.create(shape.prototype);

// var cir = new circle();