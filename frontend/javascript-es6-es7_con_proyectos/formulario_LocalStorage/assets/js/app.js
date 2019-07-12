// Variables
const listaNotas = document.getElementById('lista-notas');

// llamadp de los Event Listeners
eventListeners();

function eventListeners() {
     //Cuando se envia el formulario
     document.querySelector('#formulario').addEventListener('submit', agregarNota);

     // Borrar Notas
     listaNotas.addEventListener('click', borrarNota);

     // Contenido cargado
     document.addEventListener('DOMContentLoaded', localStorageListo); // window loaded
}

// Funciones:

// Añadir nota del formulario
function agregarNota(e) {
     e.preventDefault();
     // leer el valor del textarea
     const nota = document.getElementById('nota').value;
     // crear boton de eliminar
     const botonBorrar = document.createElement('a');
     botonBorrar.classList = 'borrar-nota';
     botonBorrar.innerText = 'X';

     // Crear elemento y añadirle el contenido a la lista
     const li = document.createElement('li');
     li.innerText = nota;
     // añade el botón de borrar a la nota
     li.appendChild(botonBorrar);
     // añade nota a la lista
     listaNotas.appendChild(li);

     // Añadir a Local Storage
     agregarNotaLocalStorage(nota);
}

// Elimina la Nota del DOM
function borrarNota(e) {
     e.preventDefault();
     if(e.target.className === 'borrar-nota') {
          e.target.parentElement.remove();
          borrarNotaLocalStorage(e.target.parentElement.innerText);
     } 
}

// Mostrar datos de LocalStorage en la lista
function localStorageListo() {
     let notas;

     notas = obtenerNotasLocalStorage();

     notas.forEach(function(nota) {
          // crear boton de eliminar
          const botonBorrar = document.createElement('a');
          botonBorrar.classList = 'borrar-nota';
          botonBorrar.innerText = 'X';

          // Crear elemento y añadirle el contenido a la lista
          const li = document.createElement('li');
          li.innerText = nota;
          // añade el botón de borrar la nota
          li.appendChild(botonBorrar);
          // añade nota a la lista
          listaNotas.appendChild(li);
     });
}

// Comprobar que haya elementos en localstorage, retorna un arreglo
function obtenerNotasLocalStorage() {
     let notas;
     // Revisamos los valoes de local storage
     if(localStorage.getItem('notas') === null) {
          notas = []; 
     } else {
          notas = JSON.parse(localStorage.getItem('notas')); // de array cadena a JSON
     }
     return notas;
}

// Agrega nota a local storage
function agregarNotaLocalStorage(nota) {
     let notas;
     notas = obtenerNotasLocalStorage();
     // Añadir la nueva nota
     notas.push(nota);
     // Convertir de string a arreglo para local storage
     localStorage.setItem('notas', JSON.stringify(notas)); // de JSON a cadena
}

// Eliminar nota de Local Storage
function borrarNotaLocalStorage(nota) {

     let notas, notaBorrar;
     // Elimina la X de nota
     notaBorrar = nota.substring(0, nota.length - 1); // substraer elementos desde indice 0 hasta n - 1, sin ultimo elemento indicado 

     notas = obtenerNotasLocalStorage();

     notas.forEach(function(nota, index) {
          if(notaBorrar === nota) {
               notas.splice(index, 1); //posicion conincidente, considerar 1 elemento
          }
     });

     localStorage.setItem('notas', JSON.stringify(notas)); // a string
}