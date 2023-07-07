var isRunning = true

while (isRunning) {
    var rand = Math.floor(Math.random() * 100 + 1)
    if (rand === 55) {
        console.log('Winner Winner Chicken Dinner')
        isRunning = false
    } else {
        console.log('You have got this random number is ' + rand)
    }
}

var isClose = false

do {
    console.log('I am close.')
} while (isClose)