var n = 5

for (var i = 1; i <= n; i++) {
    var result = ' '
    for (var j = 1; j <= i; j++) {
        result += j + ' '
    }
    console.log(result)
}
for (var i = 1; i <= n; i++) {
    var result = ' '
    for (var j = 1; j <= i; j++) {
        result += '*' + ' '
    }
    console.log(result)
}

while (true) {
    var rand = Math.floor(Math.random() * 100 + 1)
    if (rand === 55) {
        console.log('Winner Winner Chicken Dinner')
        break
    } else {
        console.log('You have got this random number is ' + rand)
    }
}