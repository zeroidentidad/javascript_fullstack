import React, { useEffect, Fragment, useRef } from 'react'
import Spinner from './Spinner/Spinner'
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPublicacionEditarAction, editarPublicacionAction } from '../redux/actions/publicacionesActions';
import { validarFormularioAction, validacionExito, validacionError } from '../redux/actions/validacionActions';

const EditarPublicacion = ({ history, match }) => {

    // Crear los refs
    const tituloRef = useRef('');
    const urlRef = useRef('');     
    const tipoRef = useRef('');     

    // Dispatch para ejecutar la acción principal
    const dispatch = useDispatch();

    const editarPublicacion = (publicacion) => dispatch(editarPublicacionAction(publicacion));
    const validarFormulario = () => dispatch(validarFormularioAction());
    const exitoValidacion = () => dispatch(validacionExito());
    const errorValidacion = () => dispatch(validacionError());

    // obtener el ID a editar
    const { id } = match.params;

    // Acceder al state
    const publicacion = useSelector(state => state.publicaciones.publicacion);
    const error = useSelector(state => state.publicaciones.error);    

    useEffect(() => {
        dispatch(obtenerPublicacionEditarAction(id))
    }, [dispatch, id]);  
    
    // Cuando carga la API
    if (!publicacion) return <Spinner />; 
    
    const submitEditarPublicacion = e => {
        e.preventDefault();

        // validar el formulario
        validarFormulario();

        if (tituloRef.current.value.trim() === '' || urlRef.current.value.trim() === '' || tipoRef.current.value.trim() === '') {
            errorValidacion();
            return;

        }

        // no hay error
        exitoValidacion();

        // guardar los cambios
        editarPublicacion({
            id,
            titulo: tituloRef.current.value,
            url: urlRef.current.value,
            tipo: tipoRef.current.value
        });

        // redireccionar
        history.push('/');
    }
    

    return (
        <Fragment>
        {error ?
        <div className="font-weight-bold alert alert-danger text-center mt-4">
            Hubo un error, intenta de nuevo
        </div>:         
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Editar Publicación</h2>
                        <form  onSubmit={submitEditarPublicacion}>
                            <div className="form-group">
                                <label>Titulo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Titulo"
                                    defaultValue={publicacion.titulo}
                                    ref={tituloRef}                                    
                                />
                            </div>
                            <div className="form-group">
                                <label>URL contenido</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="URL"
                                    defaultValue={publicacion.url}
                                    ref={urlRef}                                    
                                />
                            </div>
                            <div className="form-group">
                            <select defaultValue={publicacion.tipo} ref={tipoRef}>
                                <option value="">- Tipo de contenido -</option>
                                <option value="video">Video</option>
                                <option value="imagen">Imagen</option>
                            </select>
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        }
        </Fragment>
    )
}

export default EditarPublicacion