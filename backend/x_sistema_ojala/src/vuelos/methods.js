
module.exports = info => {
    let valores = {
        numero: null,
        origen: null,
        destino: null,
        fechaPartida: null,
        fechaLlegada: null,
        actualFechaPartida: null,
        atualFechaLlegada: null
    } 
    
    for (let prop in valores) {
        if(valores[prop]!=typeof(undefined)){
            valores[prop]=info[prop];
        }
    }

    let funciones = {
        triggerPartida: function () {
            valores.actualFechaPartida=Date.now();
        },
        triggerLlegada: function () {
            valores.atualFechaLlegada=Date.now();
        },
        getInfo: function () {
            return valores;
        }
    }

    return funciones;
}