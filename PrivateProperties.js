var Rectangle = function(width, height){
    var name = 'Ashis' //out side not access able because it's local variable. 

    this.width = width
    this.height =  height

    // this.position =  { //out side access able because it's not local variable. 
    var position =  {
        x: 56,
        y: 200
    }

    // this.printProperties = function(){ //out side access able because it's not local variable. 
    // printProperties = function(){
    //     console.log('My Width is ' + width)
    //     console.log('My Height is ' + height)
    // }

    // Or

    printProperties = function(){
        console.log('My Width is ' + width)
        console.log('My Height is ' + height)
    }.bind(this)

    this.draw = function(){
        console.log('I am a rectangle')
        // this.printProperties()  //not allow this.printProperties. Because it is not public. It is private because it is decare local variable. We know local variable is a private
        printProperties()
        console.log('Position: X: '+ position.x + ' and Y: ' + position.y)
    } 
}

var rect =  new Rectangle(45,89)
rect.draw()