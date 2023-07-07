// var Rectangle = function(width, height) {
//     this.width = width
//     this.height = height

//     this.draw = function() {
//         console.log('I am rectangle')
//         console.log('My width is ' + this.width + ' cm')
//         console.log('My height is ' + this.height + ' cm')
//         this.printProperties()
//     }
//     this.printProperties = function() {
//         console.log('This is print Properties')
//         console.log('My width is ' + this.width + ' cm')
//         console.log('My height is ' + this.height + ' cm')
//     }  
// }

// var rect1 = new Rectangle(45, 85)
// rect1.draw()


// var createRect = function(width, height) {
//     return {
//         width: width,
//         height: height,

//         draw: function() {
//             console.log('I am rectangle')
//             console.log('My width is ' + this.width + ' cm')
//             console.log('My height is ' + this.height + ' cm')
//             this.printProperties()
//         },
//         printProperties: function() {
//             console.log('This is print Properties')
//             console.log('My width is ' + this.width + ' cm')
//             console.log('My height is ' + this.height + ' cm')
//         }
//     }
// }
// var rect2 = createRect(7, 9)
// rect1.draw()


/*

rect1.constructor
ƒ (width, height) {
    this.width = width
    this.height = height

    this.draw = function() {
        console.log('I am rectangle')
        console.log('My width is ' + this.width + ' cm')
        …


rect2.constructor
ƒ Object() { [native code] }  //default constructor object in javascript
*/

var str = new String('str')
console.log('str.constructor: ', str.constructor)
/*
str.constructor
ƒ String() { [native code] }
*/
