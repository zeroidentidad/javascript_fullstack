//agregar a Local storage

localStorage.setItem('nombre','jesus');
//localStorage.removeItem('nombre');

const nombre = localStorage.getItem('nombre');

console.log(nombre);

localStorage.clear();
//sesion storage
sessionStorage.setItem('nombre', 'antonio')