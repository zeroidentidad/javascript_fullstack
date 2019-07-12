// Eliminar de Local Storage
localStorage.clear();

let elemento;

elemento = document;
elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.forms[0].classList[0];

// Acceso imagenes
elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].src;
elemento = document.images[2].getAttribute('src');

// Script en el documento
elemento = document.scripts;

// Array de document elements
let imagenes = Array.from(document.images);

//console.log(elemento);

//console.log(imagenes);

imagenes.forEach(imagen => {
   console.log(imagen);
});