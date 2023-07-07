var a = 'abc'

function x() {
    var a = 50

    function y() {
        // var a = 20
        console.log(a) //child function access parents function
    }
    console.log(a)
    y()
}
x()