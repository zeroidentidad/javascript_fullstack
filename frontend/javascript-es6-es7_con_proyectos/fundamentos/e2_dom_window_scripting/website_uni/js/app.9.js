//Reemplazar elementos
const nuevoEncabezado = document.createElement('h2');

//agregar un id
nuevoEncabezado.id = 'encabezado';

//agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los Mejores Cursos'));

//elemento anterior (sera reemplazado)
const anterior = document.querySelector('#encabezado');

// elemento padre
const elPadre = document.querySelector('#lista-cursos');

//reemplazar
elPadre.replaceChild(nuevoEncabezado, anterior);

console.log(nuevoEncabezado);