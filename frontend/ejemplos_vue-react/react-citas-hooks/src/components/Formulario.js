import React, { useState, Fragment } from 'react';

function Formulario({crearCita}) {

  const stateInicial = {
    paciente : '',
    familiar: '',
    fecha: '',
    hora: '',
    sintomas: ''
  }

  // cita = state actual
  // actualizarCita = fn para cambiar el state
  const [cita, actualizarCita] = useState(stateInicial);

  // actualiza el state
  const actualizarState = e => {
    actualizarCita({
      ...cita, 
      [e.target.name] : e.target.value
    })
  }

  // pasamos la cita al componente principal
  const enviarCita = e => {
    e.preventDefault();

    //console.log(cita);

    // pasar la cita hacia el componente principal
    crearCita(cita)

    // Reiniciar el state (reiniciar el form)
    actualizarCita(stateInicial)
  }

  return (
      <Fragment>
        <h2>Crear Cita</h2>
        <form onSubmit={enviarCita}>
                <label>Nombre</label>
                <input 
                  type="text" 
                  name="paciente"
                  className="u-full-width" 
                  placeholder="Nombre paciente" 
                  onChange={actualizarState}
                  value={cita.paciente}
                />

                <label>Nombre(s) familiar</label>
                <input 
                  type="text" 
                  name="familiar"
                  className="u-full-width"  
                  placeholder="Nombre familiares paciente" 
                  onChange={actualizarState}
                  value={cita.familiar}
                />

                <label>Fecha</label>
                <input 
                  type="date" 
                  className="u-full-width"
                  name="fecha"
                  onChange={actualizarState}
                  value={cita.fecha}
                />               

                <label>Hora</label>
                <input 
                  type="time" 
                  className="u-full-width"
                  name="hora" 
                  onChange={actualizarState}
                  value={cita.hora}
                />

                <label>Sintomas</label>
                <textarea 
                  className="u-full-width"
                  name="sintomas"
                  onChange={actualizarState}
                  value={cita.sintomas}
                ></textarea>

                <button type="submit" className="button-primary u-full-width">Agregar</button>
            </form>
      </Fragment>
  )
  
}

export default Formulario;