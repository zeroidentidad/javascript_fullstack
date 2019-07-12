//Crear elementos

const enlace = document.createElement('a');

//agregamos una clase
enlace.className='enlace';

//añadir id
enlace.id = 'nuevo-id';

//atributo href
enlace.setAttribute('href', '#');

//añadir texto
//enlace.innerText='Texto';
//enlace.textContent='Texto';
enlace.appendChild(document.createTextNode('Texto x'));

//agregar al html
document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace);
