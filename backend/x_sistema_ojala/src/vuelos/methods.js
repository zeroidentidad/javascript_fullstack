
const vuelo = function(){
    this.data={
        numero: null,
        origen: null,
        destino: null,
        fechaPartida: null,
        fechaLlegada: null,
        actualFechaPartida: null,
        atualFechaLlegada: null        
    };

    this.registrar= info =>{
        for (let prop in this.data) {
            if (this.data[prop]!=typeof (undefined)) {
                this.data[prop]=info[prop];
            }
        }
    }

    this.triggerPartida=()=>{
        this.data.actualFechaPartida=Date.now();
    }
    this.triggerLlegada=()=>{
        this.data.atualFechaLlegada=Date.now();
    }
    this.getInfo=()=>{
        return this.data;
    }
}

module.exports = info => {
    const instanciaVuelo = new vuelo();
    instanciaVuelo.registrar(info);
    
    return instanciaVuelo;
}