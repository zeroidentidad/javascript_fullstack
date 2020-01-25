import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const ListadoArticulos = () => {

    // obtener los articulos del state
    const articulos = useSelector((state) => state.articulos);  
    
    
    // Mensaje condicional
    const mensaje = Object.keys(articulos.articulos).length === 0 ? 'No hay articulos' : 'Articulos en localStorage';    

    return (
        <div className="card mt-3">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>

                <div className="lista-articulos">
                    {articulos.articulos.map(articulo => (
                    <div className="media mt-1">
                        <div className="media-body">
                            <h3 className="mt-0"></h3>
                            <p className="card-text"><span>ID:</span> {articulo.id}</p>
                            <p className="card-text"><span>Nombre:</span> {articulo.articulo}</p>
                            <p className="card-text"><span>Fecha existencia:</span> {articulo.fecha}</p>
                            <p className="card-text"><span>Area de uso:</span> {articulo.area} <span>Fabricante/modelo:</span> {articulo.modelo}</p>
                            <p className="card-text"><span>Descripción:</span> <br/> {articulo.descripcion}</p>
                            <button className="btn btn-danger">Borrar &times;</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListadoArticulos
