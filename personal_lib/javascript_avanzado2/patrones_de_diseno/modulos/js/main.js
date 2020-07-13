//crear  modulos a travez de objetos literales:

var miModuloL = {
  unaPropiedad: 'con un valor',
  // un método básico
  unMetodo: function () {
    console.log("Método que ejecuta una acción");
  }
};
miModuloL.unaPropiedad = "Un nuevo valor";
miModuloL.unMetodo();


//crear modulos a travez de IIFE

var moduloIIFE = (function () {
  //propiedades privadas
  var counter = 0;
  //metodos privados
  function incrementar(){
    counter++;
  }

  function decrementar(){
    counter--;
  }

  return {
    modificarEstado: function (direccion) {
      if(direccion == "arriba"){
        incrementar();
      }else if(direccion == "abajo"){
        decrementar();
      }
    },
    reiniciar: function () {
      counter = 0;
    },
    obtenerValorActual(){
      return counter;
    }
  };
})();


console.log(moduloIIFE.obtenerValorActual());
moduloIIFE.modificarEstado("arriba");
moduloIIFE.modificarEstado("arriba");
moduloIIFE.modificarEstado("arriba");
moduloIIFE.modificarEstado("abajo");
console.log(moduloIIFE.obtenerValorActual());



//definición de módulos en ES6
import { obtenerPropiedad, unaPropiedadPrivada} from "./modulo.js"

actualizarPropiedad(1000);
console.log(obtenerPropiedad())




