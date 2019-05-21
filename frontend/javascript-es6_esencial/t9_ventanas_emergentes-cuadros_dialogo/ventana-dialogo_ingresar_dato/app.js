"use strict"

//********************************
//*** Ventana para ingreso de datos

const video = document.querySelector('.Video');

video.addEventListener("ended", function () {
   let email = prompt("Escribe tu correo para ver mas videos",  "default@info.com");
  
   if (email == null || email == "") {
        console.log("Sin datos");
    } else {
        console.log(email);
    }
});