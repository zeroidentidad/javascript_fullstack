import { crearMuneca } from "./FabricaMunecas.js"

//Fábrica de muñecas
let propiedades = {
  nombre: "Eli",
  cabeza:{
    colorOjos: "azul",
    tamanoOjos: "mediano",
    tamañoBoca: "pequena",
    formaCabeza: "ovalada"
  },
  cabello: {
    longitudPelo: "largo",
    color: "cafe",
    estilo: "flequillo",
    accesorio: "lazo"
  },
  cuerpo:{
    altura: 5,
    colorPiel: "oliva"
  },
  ropa:{
    tipo: "vestido",
    color: "morada",
    zapatos: "tenis" //zapatillas de goma
  }
}

let muneca = crearMuneca(propiedades);
muneca.decirNombre();
