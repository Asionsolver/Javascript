const sayDate = function(name){
    console.log(`Hello ${name}. And the time is ${new Date().toLocaleTimeString()}`)
} 

const start = document.getElementById('start')
const stop = document.getElementById('stop')


start.addEventListener('click', function(){
    const interval = setInterval(sayDate, 1000, 'John')
    console.log('Started')
    stop.addEventListener('click', function(){
        clearInterval(interval)
        console.log('Stopped')
    })
})