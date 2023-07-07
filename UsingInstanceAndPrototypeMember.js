function square(width){
    this.width = width;

    this.getWidth = function(){
       console.log('Width is ' + this.width);
    //    this.draw(); //this will call the draw function of the square object.
    }
}
//constructor prototype
square.prototype={
    
    draw:function(){ 
        this.getWidth();
        console.log('Draw');
    },

    toString:function(){
        return 'My width is '+this.width;
    }
}

var sqr1 = new square(10);
var sqr2 = new square(5);  //this will create two objects/instance.

//hasOwnProperty() -->The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it). The hasOwnProperty() method is a good way to check if an object has a property, without having to rely on the instanceof operator.

// console.log(Object.keys(sqr1));

for (var i in sqr1){
    console.log(i);
}

