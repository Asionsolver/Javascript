var Rectangle = function(width, height){
    var name = 'Ashis' //out side not access able because it's local variable. 

    this.width = width
    this.height =  height

    // this.position =  { //out side access able because it's not local variable. 
    var position =  {     //out side not access able because it's local variable.
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

    //how to access private properties outside

    //1st solution 

    this.getPosition = function(){  // Accessing private properties through method declaration
        return position 
    }

    //2nd solution

    // Object.defineProperty(this, 'position', {   //It is built in method of Object
    //     get:function(){
    //         return position
    //     },
    //     set:function(value){
    //         position = value
    //     }
    // })

    this.draw = function(){
        console.log('I am a rectangle')
        // this.printProperties()  //not allow this.printProperties. Because it is not public. It is private because it is decare local variable. We know local variable is a private
        printProperties()
        console.log('Position: X: '+ position.x + ' and Y: ' + position.y)
    } 
}

var rect =  new Rectangle(45,89)
rect.draw()

console.log(rect.getPosition()) 
// rect.position={
//     x:47,
//     y:48
// }
// console.log(rect.position) 