  function square(width){
    this.width = width;

    this.getWidth = function(){
        console.log("Width is " + this.width);
    };
    
    // this.draw = function(){
    // console.log('Draw');   
    // }
}
//constructor prototype
square.prototype={
    
    draw:function(){ 
        console.log('Draw');
    },

    toString:function(){
        return 'My width is '+this.width;
    }
}

var sqr1 = new square(10);
var sqr2 = new square(5);  

sqr1.hasOwnProperty('width'); //true
sqr1.hasOwnProperty('draw'); //false
sqr2.hasOwnProperty('width'); //true
sqr2.hasOwnProperty('draw'); //false
console.log(sqr1.hasOwnProperty('getWidth')); //false

// ! Note: Object.keys() method returns an array of a given object's own enumerable properties

console.log(Object.keys(sqr1)); //["width, "getWidth"]

// ! Note: for in loop will return all the properties of the object including the prototype properties

for(var key in sqr1){
    console.log(key); //width, getWidth, draw, toString
}