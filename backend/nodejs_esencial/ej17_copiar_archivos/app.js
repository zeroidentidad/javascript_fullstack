var fs = require("fs");


fs.copyFile('./archivos/archivo_original.txt' ,  './archivos-nuevos/archivo_nuevo2.txt' , (error)=>{
    if(error){
        console.log("error al copiar"); // si la ruta no existe por ejemplo
        throw error;
    }else{
        console.log("copia OK");
    }
})

