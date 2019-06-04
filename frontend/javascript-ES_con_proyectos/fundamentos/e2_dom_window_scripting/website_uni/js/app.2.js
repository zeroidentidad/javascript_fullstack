//getElementById

let elemento;

elemento = document.getElementById("hero");

elemento = document.getElementById("hero").id;

elemento = document.getElementById("header").className;

console.log(elemento);

let encabezado = document.getElementById('encabezado').textContent;

encabezado = document.getElementById('encabezado').innerText;

encabezado = document.getElementById('encabezado');

encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';
encabezado.textContent = 'Cursos chidos'; //innerText

console.log(encabezado);