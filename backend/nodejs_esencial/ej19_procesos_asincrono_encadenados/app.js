var fs = require("fs");

fs.copyFile('./archivos/archivo_original.txt', './otros_archivos/archivo_original.txt',
(error)=>{
    if (error) {
        console.log("error");
    }else{
        fs.writeFile('./archivos/confirmacion.txt', 'archivo copiado OK', 
        (error)=>{
            console.log("proceso finalizado");
        }
        )
    }
}
)