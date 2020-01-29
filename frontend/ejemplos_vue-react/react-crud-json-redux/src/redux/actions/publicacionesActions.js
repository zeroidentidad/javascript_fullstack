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

import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';

// Crear nueva publicacion - Función principal
export function crearNuevaPublicacionAction(publicacion) {
    return (dispatch) => {
        dispatch(nuevaPublicacion());

        // Insertar en la API
        clienteAxios.post('/publicaciones', publicacion)
            .then(respuesta => {
                console.log(respuesta);

                // Si se inserta correctamente
                dispatch(agregarPublicacionExito(publicacion));
            })
            .catch(error => {
                console.log(error);

                // Si hay un error
                dispatch(agregarPublicacionError());
            })
    }
}

export const nuevaPublicacion = () => ({
    type: AGREGAR_PUBLICACION
});

export const agregarPublicacionExito = publicacion => ({
    type: AGREGAR_PUBLICACION_EXITO,
    payload: publicacion
})

export const agregarPublicacionError = error => ({
    type: AGREGAR_PUBLICACION_ERROR
})

// Obtener listado de publicaciones (Consultar API)
export function obtenerPublicacionesAction() {
    return (dispatch) => {
        dispatch(obtenerPublicacionesComienzo());

        // Consultar la API
        clienteAxios.get('/publicaciones')
            .then(respuesta => {
                // console.log(respuesta);
                dispatch(descargaPublicacionesExitosa(respuesta.data));
            })
            .catch(error => {
                //console.log(error);
                dispatch(descargaPublicacionesError());
            })
    }
}

export const obtenerPublicacionesComienzo = () => ({
    type: COMENZAR_DESCARGA_PUBLICACIONES
})

export const descargaPublicacionesExitosa = publicaciones => ({
    type: DESCARGA_PUBLICACIONES_EXITOSA,
    payload: publicaciones
})

export const descargaPublicacionesError = () => ({
    type: DESCARGA_PUBLICACIONES_ERROR
})

// Función que elimina una publicacion en especifico
export function borrarPublicacionAction(id) {
    return (dispatch) => {
        dispatch(obtenerPublicacionEliminar())

        // Eliminar en la API
        clienteAxios.delete(`/publicaciones/${id}`)
            .then(respuesta => {
                // console.log(respuesta);
                dispatch(eliminarPublicacionExito(id));
            })
            .catch(error => {
                // console.log(error);
                dispatch(eliminarPublicacionError());
            })
    }
}

export const obtenerPublicacionEliminar = () => ({
    type: OBTENER_PUBLICACION_ELIMINAR
})

export const eliminarPublicacionExito = id => ({
    type: PUBLICACION_ELIMINADO_EXITO,
    payload: id
})

export const eliminarPublicacionError = () => ({
    type: PUBLICACION_ELIMINADO_ERROR
})


// Obtener publicacion a Editar
export function obtenerPublicacionEditarAction(id) {
    return (dispatch) => {
        dispatch(obtenerPublicacionAction());

        // obtener publicacion de la api
        clienteAxios.get(`/publicaciones/${id}`)
            .then(respuesta => {
                console.log(respuesta.data);
                dispatch(obtenerPublicacionEditarExito(respuesta.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(obtenerPublicacionEditarError());
            })
    }
}

export const obtenerPublicacionAction = () => ({
    type: OBTENER_PUBLICACION_EDITAR
})

export const obtenerPublicacionEditarExito = publicacion => ({
    type: PUBLICACION_EDITAR_EXITO,
    payload: publicacion
})

export const obtenerPublicacionEditarError = () => ({
    type: PUBLICACION_EDITAR_ERROR
})


/** Modifica publicacion en la API y state */
export function editarPublicacionAction(publicacion) {
    return (dispatch) => {
        dispatch(comenzarEdicionPublicacion())

        // Consultar la API
        clienteAxios.put(`/publicaciones/${publicacion.id}`, publicacion)
            .then(respuesta => {
                // console.log(respuesta);
                dispatch(editarPublicacionExito(respuesta.data));

                Swal.fire(
                    'Guardado',
                    'La publicacion se actualizó',
                    'success'
                )

            })
            .catch(error => {
                // console.log(error);
                dispatch(editarPublicacionError())
            })

    }
}
export const comenzarEdicionPublicacion = () => ({
    type: COMENZAR_EDICION_PUBLICACION,
})

export const editarPublicacionExito = publicacion => ({
    type: PUBLICACION_EDITADO_EXITO,
    payload: publicacion
})
export const editarPublicacionError = () => ({
    type: PUBLICACION_EDITADO_ERROR
})