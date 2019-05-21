"use strict"

//********************************
//*** Validación de elementos de un arreglo

var resultado = null;

var menu = [{
        nombre: 'Ceviche',
        precio: 20,
        pais: 'Perú'
    },
    {
        nombre: 'Tacos',
        precio: 10,
        pais: 'México'
    },
    {
        nombre: 'Pasta',
        precio: 50,
        pais: 'Italia'
    },
    {
        nombre: 'Quesadillas',
        precio: 15,
        pais: 'México'
    }
]


//resultado = menu.some( platillo => platillo.precio <= 10);
//var resp = resultado==true ? 'Si' : 'No';
//console.log('¿Hay platillos abajo de 20? ', resultado);

resultado = menu.every( platillo => platillo.precio <= 60);
var resp = resultado==true ? 'Si' : 'No';
console.log('¿Todos los platillos cuestan menos de 60? ', resp);