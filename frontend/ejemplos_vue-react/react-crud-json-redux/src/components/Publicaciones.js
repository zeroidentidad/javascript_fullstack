import React, { useEffect } from 'react'
import Spinner from './Spinner/Spinner'
import Publicacion from './Publicacion'
// Redux 
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPublicacionesAction } from '../redux/actions/publicacionesActions';

const Publicaciones = () => {

    // Mandar llamar la acción principal para retornar los publicaciones
    const dispatch = useDispatch();

    useEffect(() => {
        // Publicaciones cuando el componente este listo
        const cargarPublicaciones = () => dispatch(obtenerPublicacionesAction());
        cargarPublicaciones();
    }, []);    

    // Acceder al state
    const loading = useSelector(state => state.publicaciones.loading);
    const error = useSelector(state => state.publicaciones.error);
    const publicaciones = useSelector(state => state.publicaciones.publicaciones);


    return (
        <React.Fragment>
            {error ? 
            <div className="font-weight-bold alert alert-danger text-center mt-4">Ocurrio un error...</div>
            : null}
            <h2 className="text-center my-5">Publicaciones</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Contenido</th>
                        <th scope="col">Acciones</th>
                    </tr>            
                </thead>
                <tbody>
                    {publicaciones.map(publicacion => (
                        <Publicacion
                            key={publicacion.id}
                            publicacion={publicacion}
                        />
                    ))}

                </tbody>        
            </table>
            {loading ? <Spinner /> : null}
        </React.Fragment>
    )
}

export default Publicaciones