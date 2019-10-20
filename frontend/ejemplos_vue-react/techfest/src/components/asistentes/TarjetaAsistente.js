import React from 'react';

const TarjetaAsistente = ({asistente}) => {
    return ( 
        <div className="card my-3">
            <h3 className="card-header bg-primary text-white">Datos asistente</h3>

            <div className="card-body">
                <p className="font-weight-bold">Nombre: {''}
                    <span className="font-weight-normal">{asistente.nombre} {asistente.apellido}</span>
                </p>
                <p className="font-weight-bold">Matricula: {''}
                    <span className="font-weight-normal">{asistente.matricula}</span>
                </p>
                <p className="font-weight-bold">Profesión: {''}
                    <span className="font-weight-normal">{asistente.profesion}</span>
                </p>
            </div>
        </div>
     );
}
 
export default TarjetaAsistente;