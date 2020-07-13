/* worker.js */

var valorClave = 4;

  function codificarMensaje (mensaje) {
    let resultado = "";
    for(var i = 0, j = mensaje.length; i < j; i++){
      resultado += String.fromCharCode(mensaje.charCodeAt(i) * valorClave);
    }
    self.postMessage({ resultado });
  }

  function decodificarMensaje (mensaje) {
    let resultado = "";
    for(var i = 0, j = mensaje.length; i < j; i++){
      resultado += String.fromCharCode(mensaje.charCodeAt(i) / valorClave);
    }
    self.postMessage({ resultado });
  }

// Como recibir un mensaje desde el main
self.onmessage = function (e) {
    if(e.data.tipo == "codificar"){
        codificarMensaje(e.data.mensaje);
    }else{
        decodificarMensaje(e.data.mensaje);
    }
}