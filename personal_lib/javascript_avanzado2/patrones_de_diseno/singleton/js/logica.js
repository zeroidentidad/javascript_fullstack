//Objetos literales son Singleton
const cuadrado = {
  largoLados: 40,
  calcularArea(){
    return this.largoLados * 2;
  }
}

const cuadrado2 = {
  largoLados: 40,
  calcularArea(){
    return this.largoLados * 2;
  }
}

cuandrado === cuadrado2 //false

//Singleton con una función IIFE

var Singleton = (function() {

  //Métodos y propiedades privados:

  var valorClave = 4;

  function codificarMensaje (mensaje) {
    let resultado = "";
    for(var i = 0, j = mensaje.length; i < j; i++){
      resultado += String.fromCharCode(mensaje.charCodeAt(i) * valorClave);
    }
    return resultado;
  }

  function decodificarMensaje (mensaje) {
    let resultado = "";
    for(var i = 0, j = mensaje.length; i < j; i++){
      resultado += String.fromCharCode(mensaje.charCodeAt(i) / valorClave);
    }
    return resultado;
  }

  return { // Métodos publicos
    ocultarMensaje: function (mensaje) {
      return codificarMensaje(mensaje)
    },
    leerMensaje: function (mensaje) {
      return decodificarMensaje(mensaje);
    }
  };
})();

let mensajeOculto = Singleton.ocultarMensaje("mi mensaje");
console.log(mensajeOculto);
let mensajeDesifrado = Singleton.leerMensaje(mensajeOculto);
console.log(mensajeDesifrado);