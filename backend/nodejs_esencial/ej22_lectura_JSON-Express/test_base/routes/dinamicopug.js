var express = require('express');
var router = express.Router();


router.get("/" , function(peticion, respuesta){
    respuesta.render('dinamico');
})

router.get("/:datoURL/:ID" , function(peticion, respuesta){

    respuesta.render('dinamico' , { 
        datos:{
            titulo:peticion.params.datoURL,
            ID:peticion.params.ID
        }

    }   );
   /// respuesta.send("informacion dinamica: " + peticion.params.datoURL  );
})

module.exports = router;
