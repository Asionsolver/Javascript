var createRect = function(width, height) {
    return {
        width: width,
        height: height,

        draw: function() {
            console.log('I am rectangle')
            console.log('My width is ' + this.width + ' cm')
            console.log('My height is ' + this.height + ' cm')
            this.printProperties()
        },
        printProperties: function() {
            console.log('This is print Properties')
            console.log('My width is ' + this.width + ' cm')
            console.log('My height is ' + this.height + ' cm')
        }
    }
}
var rect1 = createRect(7, 9)
rect1.draw()

var rect2 = createRect(85, 93)
rect2.draw()