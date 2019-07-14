const acceso = 0

// Arrow func notacion corta
            //recibe    //retorna
let Func = permiso => permiso

// Validacion anidacion op ternario
Func(acceso)==1 ? console.log("Permitido") : 
                    (acceso)==2 ? console.log("inactivo") : 
                    console.log("denegado");

// Otras convenciones:
let Func2 = ( () => console.log(0) )(); // auto invocar

let num2 = 10, num1 = 30; // var func3
let Func3 = (n1, n2) => n1 + n2;
console.log(Func3(num2, num1));

let Func4 = (acceso) =>{ // convencion estandar
    if (acceso===0) { console.log("inactivo") } 
    else if (acceso === 1){ console.log("activo") }
    else{ console.log("desconocido") }
}
Func4(acceso);

let Obj = {nombre: 'Fulano X'} // obj func5
let Func5 = (({ nombre }) => console.log(nombre))(Obj); // auto utilizar