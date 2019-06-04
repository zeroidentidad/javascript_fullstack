//query selector : id, class

let encabezado = document.querySelector("#encabezado");

//aplicar css
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';
encabezado.textContent = 'Cursos chidos'; //innerText

encabezado = document.querySelector('.card img');

console.log(encabezado);

let enlace;

enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:last-child');
enlace = document.querySelector('#principal a:nth-child(3)');

console.log(enlace);