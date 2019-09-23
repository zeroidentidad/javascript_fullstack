// ARRAY, SET, MAP

const ciudades = ['Ciudad w', 'Ciudad x', 'Ciudad y', 'Ciudad z']

const ordenes = new Set([123, 321, 132, 104]);

const datos = new Map();
datos.set('nombre', 'jesus');
datos.set('profesion', 'programador');

// Iterador Entries:

for(let entrada of ciudades.entries()){
    console.log(entrada);
}

for(let entrada of ordenes.entries()){
    console.log(entrada);
}

for(let entrada of datos.entries()){
    console.log(entrada);
}

// Iterador Values:
console.log('=====================')

// entrada of ciudades.values() == entrada of ciudades
for(let entrada of ciudades.values()){
    console.log(entrada);
}

for(let entrada of ordenes.values()){
    console.log(entrada);
}

for(let entrada of datos.values()){
    console.log(entrada);
}

// Iterador Keys:
console.log('=====================')

for (let entrada of ciudades.keys()) {
    console.log(entrada);
}

for (let entrada of ordenes.keys()) {
    console.log(entrada);
}

for (let entrada of datos.keys()) {
    console.log(entrada);
}

// STRING

const cadenaTxt = 'Texto de prueba JS';

// Iterador clasico:
console.log('=====================')

for (let i = 0; i < cadenaTxt.length; i++) {
    console.log(cadenaTxt[i]); 
}

//Iterador de JS incluido:
console.log('=====================')

for(let letra of cadenaTxt){
    console.log(letra);
}

//Lo anterior igual aplica para trabajar con elementos del DOM y JSON por medios de acceso a sus propiedades, es decir, para recorrer objetos.