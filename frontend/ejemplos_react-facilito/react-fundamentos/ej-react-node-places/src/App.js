import React from 'react';
import Title from './components/Title';

function App() {
  return (
    <section>
      <div>
        <div>
          <Title />
          <button>Crear cuenta</button>
          <div>
            <ul>
              <li><h3>Calificar lugares</h3></li>
              <li><h3>Experiencia offline o conexion lenta</h3></li>
              <li><h3>Coleccion favotiros</h3></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
