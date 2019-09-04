const ciudades = ["londres", "mexico", "lugarx", "nose", "algoxs", {idioma: 'ingles'}];

/*const [
    primeraCiudad,
    segundaCiudad
] = ciudades;  

console.log(primeraCiudad);
console.log(segundaCiudad);*/

//const [, , , , algo] = ciudades;
//console.log(algo);

const [, , , , , ingles] = ciudades;
console.log(ingles.idioma);

// con obj avanzado:
const cliente = {
    tipo: 'basico',
    saldo: 35678,
    datos: {
        nombre: 'Pedro',
        apellido: 'Perez',
        residencia: {
            ciudad: 'Mexico'
        }
    },
    movimientos: ['12-19-1992', '12-19-2019']
}

let {
    datos,
    datos: {residencia},
    //movimientos,
    movimientos: [uno, dos]
} = cliente

console.log(residencia);
console.log(datos);
console.log(datos.residencia);

//console.log(movimientos);
//console.log(movimientos[1]);
console.log(dos);