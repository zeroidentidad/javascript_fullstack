import React from 'react';

function Cita({ cita, index, eliminarCita }) {
    return (
        <div className="cita">
            <p>Nombre: <span>{cita.paciente}</span> </p>
            <p>Familiar(es): <span>{cita.familiar}</span> </p>
            <p>Fecha: <span>{cita.fecha}</span> </p>
            <p>Hora: <span>{cita.hora}</span> </p>
            <p>Sintomas: <span>{cita.sintomas}</span> </p>
            <button
            onClick={() => eliminarCita(index)}
            type="button" className="button eliminar u-full-width">Eliminar</button>
        </div>
    )
}

export default Cita;