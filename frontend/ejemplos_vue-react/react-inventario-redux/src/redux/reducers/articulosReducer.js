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
        default:
            return state;
    }
}