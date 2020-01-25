export const agregarArticuloAction = articulo => {
    return {
        type: 'AGREGAR_ARTICULO',
        payload: articulo
    }
}

export const borrarArticuloAction = id => {
    return {
        type: 'BORRAR_ARTICULO',
        payload: id
    }
}