//Promises

const aplicarDescuento = new Promise(function (resolve, reject) {
    const descuento = false;
    if (descuento){
        resolve('Descuento aplicado')
    } else{
        reject('No se pudo aplicar descuento')
    }
})

aplicarDescuento.then(function (msg) {
    console.log(msg)
}).catch(function (msg) {
    console.log(msg) 
})