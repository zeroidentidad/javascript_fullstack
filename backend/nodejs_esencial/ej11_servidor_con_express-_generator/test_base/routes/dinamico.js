var express = require('express');
var router = express.Router();


router.get("/" , function(peticion, respuesta){
    respuesta.send("informacion dinamica");
})

router.get("/:datoURL" , function(peticion, respuesta){
    respuesta.send("informacion dinamica: " + peticion.params.datoURL  );
})

module.exports = router;
