 var str = 'Some String'
 var length = 0

 while (true) {
     if (str.charAt(length) == '') {
         break
     } else {
         length++
     }
 }

 console.log('The string length is ' + length)

 var str2 = 'My name is Ashis Kumar Pal'
 console.log('Use string length function: ' + str2.length)