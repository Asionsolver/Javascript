 var addition = function(a, b) {
     return a + b
 }

 addition(45, 21) //annonimas function
 var another = addition
 console.log(another)

 setTimeout(function() {
     console.log('I will call after 5 second')
 }, 3000)

 console.log(another(34, 85));
