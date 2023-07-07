function something(greet, name) {
    function firstName() {
        if (name) {
            return name.split(' ')[0]
        } else {
            return ''
        }
    }
    var message = greet + " " + firstName()
    console.log(message)
}

something('Good Morning', 'Ashis Kumar Pal')