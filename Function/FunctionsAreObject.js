function test() {
    console.log('some things')
}

var rect5 = new Function('width', 'height', `this.width = width 
        this.height = height

        this.draw = function() {
            console.log('I am rectangle')
            console.log('My width is ' + this.width + ' cm')
            console.log('My height is ' + this.height + ' cm')
            console.log(this)
            this.printProperties()
        }
        this.printProperties = function() {
            console.log('This is print Propeties')
            console.log('My width is ' + this.width + ' cm')
            console.log('My height is ' + this.height + ' cm')
        }`)

var rect6 = new rect5(4, 5)
console.log(rect6)
rect6.draw()
console.log('Function name is ' + '-->' + test.name + ' and function argument lenght is ' + test.length)