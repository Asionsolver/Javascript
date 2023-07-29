var rect = {
    width:100,
    height: 50,

    draw: function(){
        console.log('I am rectangle.')
        this.printProperties()
        console.log(this)
    },

    printProperties: function(){
        console.log('My width is ' + this.width)
        console.log('My height is ' + this.height)
    }
}

rect.draw()

// rect.width = 4444
// rect.draw()

var another ={
    width:45,
    height:96,
    print:rect.printProperties
}
// console.log(another.print)
another.print()