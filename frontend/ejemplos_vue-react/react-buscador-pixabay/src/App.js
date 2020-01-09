import React, { useState, useEffect } from 'react';
import Buscador from './components/Buscador';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {

    const consultarApi = async () => {

      if (busqueda === '') return;

      const imagenesPorPagina = 20;
      const key = '14853861-0a61123e71dd7cf9015463285';

      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);

      // Calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina)
      guardarTotalPaginas(calcularTotalPaginas);

      // Mover hacia la parte superior
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
    consultarApi();

  }, [busqueda, paginaActual]);

  const paginaAnterior = () => {
    let nuevaPaginaActual = paginaActual - 1;

    // colocarlo en el state
    guardarPaginaActual(nuevaPaginaActual);

  }
  const paginaSiguiente = () => {
    let nuevaPaginaActual = paginaActual + 1;

    // colocamos en el state
    guardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center"><b>Buscador de Imágenes</b></p>

        <Buscador guardarBusqueda={guardarBusqueda} />
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />

        {(paginaActual === 1) ? null : (
          <button onClick={paginaAnterior} type="button" className="btn btn-info mr-2">Anterior &laquo;</button>
        )}

        {(paginaActual === totalPaginas) ? null : (
          <button onClick={paginaSiguiente} type="button" className="btn btn-info">Siguiente &raquo;</button>
        )}

      </div>
    </div>
  );
}

export default App;