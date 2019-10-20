import { BUSCAR_ASISTENTE } from './types';

export const buscarAsistencia = asistencia => {
    return {
        type: BUSCAR_ASISTENTE,
        asistencia
    }
}