import React, {useState} from 'react'
// Redux
import { crearNuevaPublicacionAction } from '../redux/actions/publicacionesActions';
import { validarFormularioAction, validacionExito, validacionError } from '../redux/actions/validacionActions';
import { useDispatch, useSelector } from 'react-redux';

const NuevaPublicacion = ({ history }) => {

    // sate
    const [titulo, guardarTitulo] = useState('');
    const [url, guardarURL] = useState('');
    const [tipo, guardarTipo] = useState('');
    
    // Crear nuevo publicacion 
    const dispatch = useDispatch();
    const agregarPublicacion = (publicacion) => dispatch(crearNuevaPublicacionAction(publicacion));
    const validarFormulario = () => dispatch(validarFormularioAction());
    const exitoValidacion = () => dispatch(validacionExito());
    const errorValidacion = () => dispatch(validacionError());  
    
    // Obtener los datos del state
    const error = useSelector((state) => state.error.error);    

    // Agregar publicacion
    const submitNuevaPublicacion = e => {
        e.preventDefault();

        // Validar el formulario
        validarFormulario();
        if (titulo.trim() === '' || url.trim() === '' || tipo.trim() === '') {
            errorValidacion();
            return;
        }        

        // Si pasa la validación
        exitoValidacion();

        // crear publicacion
        agregarPublicacion({
            titulo, url, tipo
        });        

        // redireccionar
        history.push('/');
    }    

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar publicación</h2>
                        <form onSubmit={submitNuevaPublicacion}>
                            <div className="form-group">
                                <label>Titulo contenido</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Titulo contenido"
                                    value={titulo}
                                    onChange={e => guardarTitulo(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>URL video/imagen de API Graph</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Video o imagen de API Graph"
                                    value={url}
                                    onChange={e => guardarURL(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <select value={tipo} onChange={e => guardarTipo(e.target.value)}>
                                <option value="">- Tipo de contenido -</option>
                                <option value="video">Video</option>
                                <option value="imagen">Imagen</option>
                            </select>
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>

                        {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Todos los campos son obligatorios</div> : null}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevaPublicacion