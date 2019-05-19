"use strict";


//********************************
//*** Manejo de errores

try {
    // var array = new Array(10000000000);
    // var x = y;
     decodeURIComponent("http://%ominio.com");
} catch (error) {
    console.log(error.message)
     console.log(error.name)
}