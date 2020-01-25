const initialState = {
    articulos: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'AGREGAR_ARTICULO':
            return {
                ...state,
                articulos: [...state.articulos, action.payload]
            }
        case 'BORRAR_ARTICULO':
            return {
                ...state,
                articulos: state.articulos.filter(articulo => articulo.id !== action.payload)
            }
        default:
            return state;
    }
}