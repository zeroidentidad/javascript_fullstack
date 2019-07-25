var fs = require("fs");

 function copiarArchivo(rutaOriginal, nuevaRuta, archivoParaCopiar){

    fs.copyFile( rutaOriginal + '/' + archivoParaCopiar ,  nuevaRuta + '/' + archivoParaCopiar , (error)=>{
        if (error) {
            console.log("error");
        }else{
            eliminarArchivo( rutaOriginal,  archivoParaCopiar  )
        }
    } )

 }

 function eliminarArchivo( rutaOriginal, archivoParaCopiar ){
    fs.unlink( rutaOriginal  + '/' + archivoParaCopiar , (error)=>{

        if (error) {
            console.log("error al eliminar ");
        } else {
            console.log("borrar ok");
        }

    })
 }


 copiarArchivo('./archivos' , './otros_archivos', 'archivo_original.txt');