import React from 'react';

const FichaSuscriptor = ({ suscriptor }) => {
    return (
        <div className="card my-3">
            <h3 className="card-header bg-primary text-white">Datos solicitante</h3>

            <div className="card-body">
                <p className="font-weight-bold">Nombre: {''}
                    <span className="font-weight-normal">{suscriptor.nombre} {suscriptor.apellido}</span>
                </p>
                <p className="font-weight-bold">Código: {''}
                    <span className="font-weight-normal">{suscriptor.codigo}</span>
                </p>
                <p className="font-weight-bold">Carrera: {''}
                    <span className="font-weight-normal">{suscriptor.carrera}</span>
                </p>
            </div>
        </div>
    );
}

export default FichaSuscriptor;