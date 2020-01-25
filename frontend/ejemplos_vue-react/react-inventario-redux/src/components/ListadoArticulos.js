import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { borrarArticuloAction } from '../redux/actions/articulosActions';

const ListadoArticulos = () => {

    // obtener los articulos del state
    const articulos = useSelector((state) => state.articulos);  
    
    // Dispatch para mandar llamar la acción de eliminar
    const dispatch = useDispatch();    
    
    // Mensaje condicional
    const mensaje = Object.keys(articulos.articulos).length === 0 ? 'No hay articulos' : 'Articulos en localStorage';    

    return (
        <div className="card mt-3">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>

                <div className="lista-articulos">
                    {articulos.articulos.map(articulo => (
                    <div key={articulo.id} className="media mt-1">
                        <div className="media-body">
                            <h3 className="mt-0"></h3>
                            <p className="card-text"><span>ID:</span> {articulo.id.substring(0, 10)}</p>
                            <p className="card-text"><span>Nombre:</span> {articulo.articulo}</p>
                            <p className="card-text"><span>Fecha existencia:</span> {articulo.fecha}</p>
                            <p className="card-text"><span>Area de uso:</span> {articulo.area} <span>Fabricante/modelo:</span> {articulo.modelo}</p>
                            <p className="card-text"><span>Descripción:</span> <br/> {articulo.descripcion}</p>
                            <button className="btn btn-danger"
                            onClick={() => dispatch(borrarArticuloAction(articulo.id))}
                            >Borrar &times;
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListadoArticulos
