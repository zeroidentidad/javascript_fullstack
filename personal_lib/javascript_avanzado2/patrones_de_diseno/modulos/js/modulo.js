var unaPropiedadPrivada = 5;

function actualizarPropiedad(valor){
    unaPropiedadPrivada = valor
}

function obtenerPropiedad(){
    return unaPropiedadPrivada;
}

export {obtenerPropiedad, actualizarPropiedad};
