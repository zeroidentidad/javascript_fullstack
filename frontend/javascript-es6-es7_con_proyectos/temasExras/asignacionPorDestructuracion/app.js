const cliente = {
    nombre : 'Alejandra',
    tipo: 'Premium'
}

nombre = 'Jesus';
tipo = 'Basico';

({nombre, tipo} = cliente); 

console.log(nombre)
console.log(tipo)

const cliente2 = {
    nombre: 'Ana',
    tipo: 'Premium',
    datos: {
        ubicacion: {
            ciudad: 'Villahermosa',
            pais: 'Mexico'
        },
        cuenta: {
            desde: '19-12-1992',
            saldo: 27
        }
    }
}

let {datos: {ubicacion}}=cliente2;
console.log(ubicacion)
console.log(ubicacion.ciudad)

let {datos: {cuenta}}=cliente2;
console.log(cuenta)

/*const cliente3 = {
    nombre: 'Veronica',
    tipo: 'Premium'
}

let {nombre, tipo, saldo=0} = cliente3
console.log(nombre)
console.log(tipo)
console.log(saldo)*/