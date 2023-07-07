 var Rectangle = function(width, height) {
    this.width = width
    this.height = height

    this.draw = function() {
        console.log('I am rectangle')
        console.log('My width is ' + this.width + ' cm')
        console.log('My height is ' + this.height + ' cm')
        console.log(this)
        this.printProperties()
    }
    this.printProperties = function() {
        console.log('This is print Properties')
        console.log('My width is ' + this.width + ' cm')
        console.log('My height is ' + this.height + ' cm')
    }
}


function myNew(constructor) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argArray.slice(1))
    return obj
}

var rect4 = myNew(Rectangle, 89, 69)
rect4.draw()