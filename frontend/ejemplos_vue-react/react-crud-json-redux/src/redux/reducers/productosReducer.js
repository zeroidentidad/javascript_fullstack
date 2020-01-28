import {
    AGREGAR_PUBLICACION,
    AGREGAR_PUBLICACION_EXITO,
    AGREGAR_PUBLICACION_ERROR,
    COMENZAR_DESCARGA_PUBLICACIONES,
    DESCARGA_PUBLICACIONES_EXITOSA,
    DESCARGA_PUBLICACIONES_ERROR,
    OBTENER_PUBLICACION_ELIMINAR,
    PUBLICACION_ELIMINADO_EXITO,
    PUBLICACION_ELIMINADO_ERROR,
    OBTENER_PUBLICACION_EDITAR,
    PUBLICACION_EDITAR_EXITO,
    PUBLICACION_EDITAR_ERROR,
    COMENZAR_EDICION_PUBLICACION,
    PUBLICACION_EDITADO_EXITO,
    PUBLICACION_EDITADO_ERROR
} from '../types';

// cada reducer tiene sU state
const initialState = {
    publicaciones: [],
    error: null,
    loading: false,
    publicacion: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AGREGAR_PUBLICACION:
            return {
                ...state,
                error: null
            }
        case AGREGAR_PUBLICACION_EXITO:
            return {
                ...state,
                error: null,
                publicaciones: [...state.publicaciones, action.payload]
            }
        case AGREGAR_PUBLICACION_ERROR:
            return {
                ...state,
                error: true,
            }
        case COMENZAR_DESCARGA_PUBLICACIONES:
            return {
                ...state,
                loading: true,
                publicacion: {}
            }
        case DESCARGA_PUBLICACIONES_EXITOSA:
            return {
                ...state,
                publicaciones: action.payload,
                loading: false,
                error: false,
                publicacion: {}
            }
        case DESCARGA_PUBLICACIONES_ERROR:
            return {
                ...state,
                publicaciones: [],
                error: true,
                loading: false,
                publicacion: {}
            }
        case OBTENER_PUBLICACION_ELIMINAR:
            return {
                ...state,
                error: null
            }
        case PUBLICACION_ELIMINADO_EXITO:
            return {
                ...state,
                error: null,
                publicaciones: state.publicaciones.filter(publicacion => publicacion.id !== action.payload)
            }
        case PUBLICACION_ELIMINADO_ERROR:
            return {
                ...state,
                error: true
            }
        case OBTENER_PUBLICACION_EDITAR:
            return {
                ...state,
                error: null
            }
        case PUBLICACION_EDITAR_EXITO:
            return {
                ...state,
                error: null,
                publicacion: action.payload
            }
        case PUBLICACION_EDITAR_ERROR:
            return {
                ...state,
                error: true
            }
        case COMENZAR_EDICION_PUBLICACION:
            return {
                ...state,
                error: null
            }
        case PUBLICACION_EDITADO_EXITO:
            return {
                ...state,
                error: null,
                publicaciones: state.publicaciones.map(publicacion => publicacion.id === action.payload.id ? publicacion = action.payload : publicacion)
            }
        case PUBLICACION_EDITADO_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}