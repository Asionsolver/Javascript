const paymentSuccess = false;
const marks = 90;

function enroll(){
    console.log('Course enrollment is in progress.');

    const promises = new Promise(function(resolve, reject){
        setTimeout(function() {
            if(paymentSuccess){
                resolve();
            }else{
                reject('Payment failed!');
            }
        }, 5000);
    });

    return promises;
}

function progress(){
    console.log('Course on progress...');

    const promises = new Promise(function(resolve, reject){
        setTimeout(function() {
            if(marks >= 80){
                resolve();
            }else{
                reject('You could not get enough marks to get the certificate.')
            }
        }, 8000);
    });

    return promises;
}

function getCertificate(){
    console.log('Preparing your certificate...')

    // const promises = new Promise.resolve('Congrats! You got the certificate.') //smaller syntax

    const promises = new Promise(function(resolve){
        setTimeout(() => {
            resolve('Congrats! You got the certificate.' )
        }, 1000);
    })
    
    return promises;
}

enroll()
        .then(progress)
        .then(getCertificate)
        .then(function(value){
            console.log(value);
        })
        .catch(function(error){
            console.log(error)
        })