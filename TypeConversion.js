 var str = '1000'
 var n = 10


 // Automatically Conversion string into number
 console.log('Not recomanded.Because Different JavaScript engines behave differently')

 console.log(str - n) //Not recomanded.Because Different JavaScript engines behave differently
 console.log(str * n) //Not recomanded.Because Different JavaScript engines behave differently
 console.log(str / n) //Not recomanded.Because Different JavaScript engines behave differently

 // Do not automatically conversion string into number. Because "+" sign means String Concatination 

 console.log('Do not automatically conversion string into number. Because "+" sign means String Concatination ')
 console.log(str + n)

 //Recomanded Way

 console.log('Recomanded Way')
 console.log(Number(str) + n)
 console.log(Number(str) - n)
 console.log(Number(str) * n)
 console.log(Number(str) / n)


 //Highely Recomanded Way

 console.log('Highely Recomanded Way')
 console.log(Number.parseInt(str) + n)
 console.log(Number.parseInt(str) - n)
 console.log(Number.parseInt(str) * n)
 console.log(Number.parseInt(str) / n)

 //Convert Number into String
 console.log('Convert Number into String')
 console.log(n.toString())

 console.log(Boolean(Infinity))
 console.log(Boolean(-Infinity))


 //  Js Fasley Value
 //''
 //0
 //  NaN
 // Null
 // undefined
 console.log('Falsy Value:')
 console.log(Boolean(''))
 console.log('NaN is ' + Boolean(NaN) + ' value')
 console.log('Undefined is ' + Boolean(undefined) + ' value')
 console.log('-0 is ' + Boolean(-0) + ' value')
 console.log('0 is ' + Boolean(0) + ' value')
 console.log('Null is ' + Boolean(null) + ' value')
 console.log('Any other number other than 0 and -0 is ' + Boolean(66) + ' value')