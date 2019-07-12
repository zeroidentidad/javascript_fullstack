//Event listener mouse

const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelector('.enlace');
const boton = document.querySelector('#vaciar-carrito');

//Click
//boton.addEventListener('click', obtenerEvento);

//Doble click
//boton.addEventListener('dblclick', obtenerEvento);

//Mouse enter
//boton.addEventListener('mouseenter', obtenerEvento);

//Mouse leave
//boton.addEventListener('mouseleave', obtenerEvento);

//Mouse over
//boton.addEventListener('mouseover', obtenerEvento);

//Mouse out
//boton.addEventListener('mouseout', obtenerEvento);

//Mouse down
//boton.addEventListener('mousedown', obtenerEvento);

//Mouse up
boton.addEventListener('mouseup', obtenerEvento);

//Mouse move
encabezado.addEventListener('mousemove', obtenerEvento);

function obtenerEvento(e) {
    console.log(`Evento: ${e.type}`);
}