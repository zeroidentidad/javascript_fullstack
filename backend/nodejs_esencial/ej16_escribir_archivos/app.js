var fs = require("fs");


/*

fs.writeFile( './archivos/texto-nuevo.txt' , 'datos enviados desde node' , (error)=>{
    if(error){
        console.log(" error al escribir archivo");
    }else{
        console.log("archivo modificado exitosamente");
    }
})

*/

fs.appendFile( './archivos/texto-nuevo.txt' , '    NUEVOS DATOS' , (error)=>{
    if(error){
        console.log(" error al escribir archivo");
    }else{
        console.log("archivo modificado exitosamente");
    }
})