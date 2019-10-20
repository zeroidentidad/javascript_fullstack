import { BUSCAR_ASISTENTE } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {

    switch(action.type) {
        case BUSCAR_ASISTENTE:
            return {
                ...state,
                nombre: action.asistencia.nombre,
                apellido: action.asistencia.apellido,
                matricula: action.asistencia.matricula,
                profesion: action.asistencia.profesion,
                nickname: action.asistencia.nickname
            }
        default: 
            return state;
    }
}