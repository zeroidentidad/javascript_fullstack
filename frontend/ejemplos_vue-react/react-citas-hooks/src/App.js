import React, { useState, useEffect,  Fragment } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita'

function App() {

  // cargar las citas de localstorage como state inicial
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales) {  citasIniciales = []; }

  // useState retorna 2 funciones
  // El state actual = this.state;
  // Función que actualiza el state this.setState();
  const [citas, guardarCita] = useState(citasIniciales);

  // Agregar nuevas citas al state
  const crearCita = cita => {
    // Tomar copia del state y agregar nuevo paciente
    const nuevasCitas = [...citas, cita];

    // almacenamos en el state
    guardarCita(nuevasCitas);
  }
  // Elimina las Citas del State
  const eliminarCita = index => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    guardarCita(nuevasCitas);
  }

  useEffect(
    () => {
        let citasIniciales = JSON.parse(localStorage.getItem('citas'));
        if(citasIniciales) {
          localStorage.setItem('citas', JSON.stringify(citas));
        } else {
          localStorage.setItem('citas', JSON.stringify([]));
        }
    }, 
    [citas])

  // Cargar Condicionalmente un Titulo
  const titulo = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administrar citas';

  return(
      <Fragment>
        <h1>Admin Pacientes (localStorage)</h1>
        <div className="container">
            <div className="row">
                <div className="one-half column">
                    <Formulario 
                      crearCita={crearCita}
                    />
                </div>
                <div className="one-half column">
                  <h2>{titulo}</h2>
                  {citas.map((cita, index) => (
                      <Cita 
                        key={index}
                        index={index}
                        cita={cita}
                        eliminarCita={eliminarCita}
                      />
                  ))}
                </div>
            </div>
        </div>
      </Fragment>
  )
}

export default App;