var Rectangle = function(width, height) {
    this.width = width
    this.height = height

    this.draw = function() {
        console.log('I am rectangle')
        console.log('My width is ' + this.width + ' cm')
        console.log('My height is ' + this.height + ' cm')
        this.printProperties()
    }
    this.printProperties = function() {
        console.log('This is print Properties')
        console.log('My width is ' + this.width + ' cm')
        console.log('My height is ' + this.height + ' cm')
    }
}

var rect1 = new Rectangle(45, 85)
rect1.draw()