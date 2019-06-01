var fs = require("fs");

//eliminacion permanente
fs.unlink( './archivos/archivox.txt' , (error)=>{

    if(error){
        console.log("error"); //archivo no existe o ruta incorrecta
    }else{
        console.log("ok");
    }
    
})