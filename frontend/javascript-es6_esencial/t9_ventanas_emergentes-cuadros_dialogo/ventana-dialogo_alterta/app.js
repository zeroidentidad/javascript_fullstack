"use strict"

//********************************
//*** Ventana de alerta

const video = document.querySelector('.Video');

video.addEventListener("ended", function () {
   alert("MENSAJE \n\nEl video ha terminado");
});