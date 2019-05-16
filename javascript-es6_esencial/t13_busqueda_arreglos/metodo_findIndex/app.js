"use strict"

//********************************
//*** Busqueda de índice de elementos

var platillos = ["arepa", "tacos", "pasta"];

var menu = [{
        nombre: 'Arepa',
        precio: 20,
        pais: 'Venezuela'
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
    }
]


// var numPlatillo = platillos.findIndex( platillo => platillo == 'tacos' );

var numPlatillo = menu.findIndex( platillo => platillo.nombre == 'Pasta' );

console.log("Platillo número: ", numPlatillo);