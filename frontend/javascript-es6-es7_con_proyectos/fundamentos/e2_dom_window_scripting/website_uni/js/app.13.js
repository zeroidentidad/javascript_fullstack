//Event listener inputs

const buscador = document.querySelector('#buscador');

//buscador.addEventListener('keydown', obtenerEvento);

//buscador.addEventListener('keyup', obtenerEvento);

//buscador.addEventListener('keypress', obtenerEvento);

//buscador.addEventListener('focus', obtenerEvento);

//buscador.addEventListener('blur', obtenerEvento); //al salir del elemento

//buscador.addEventListener('cut', obtenerEvento); // al cortar texto

//buscador.addEventListener('copy', obtenerEvento); // al copiar texto escrito dentro

//buscador.addEventListener('paste', obtenerEvento);

buscador.addEventListener('input', obtenerEvento); // todo en uno de los eventos anteriores

buscador.addEventListener('change', obtenerEvento); //opcional input

function obtenerEvento(e) {
    document.querySelector('#encabezado').innerText = buscador.value;
    console.log(`Evento: ${e.type}`);
}