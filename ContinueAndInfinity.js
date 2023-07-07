for (var i = 0; i < 10; i++) {
    if (i === 3 || i === 4) {
        continue
    } else {
        console.log(i)
    }
}

// Infinity Loop

for (;;) {
    var rand = Math.floor(Math.random() * 100 + 1)
    if (rand === 55) {
        console.log('Winner Winner Chicken Dinner')
        break
    } else {
        console.log('You have got this random number is ' + rand)
    }
}