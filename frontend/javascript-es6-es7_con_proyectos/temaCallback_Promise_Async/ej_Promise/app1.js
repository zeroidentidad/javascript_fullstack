//Promises

const esperando = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Se ejecuto')
    }, 4000);
})

esperando.then(function (msg) {
    console.log(msg)
})