class Cuerpo{

    altura;
    colorPiel;
    cabeza;
    cabello;
    ropa;
    nombre;

    constructor(propiedades){
        this.altura = propiedades.altura;
        this.colorPiel = propiedades.colorPiel;
        this.nombre = propiedades.nombre;
    }

    asignarCabeza(cabeza){
        this.cabeza = cabeza;
    }

    asignarCabello(cabello){
        if(!this.cabeza){
            throw new Error("Sin cabeza no hay cabello");
        }
        this.cabello = cabello;
    }

    asignarRopa(){
        this.ropa = ropa;
    }

    decirNombre(){
        console.log(`Mi nombre es ${this.nombre}`)
    }

}

class Cabeza{
    colorOjos;
    tamanoOjos;
    tamañoBoca;
    formaCabeza;
    constructor(propiedades){
        this.colorOjos = propiedades.colorOjos;
        this.tamanoOjos = propiedades.tamanoOjos;
        this.tamañoBoca = propiedades.tamañoBoca;
        this.formaCabeza = propiedades.formaCabeza;
    }
}

class Cabello{

    longitudPelo;
    color;
    estilo;
    accesorio;

    constructor(propiedades){
        this.longitudPelo = propiedades.longitudPelo;
        this.color = propiedades.color;
        this.estilo = propiedades.estilo;
        this.accesorio = propiedades.accesorio;
    }
}

class Ropa{

    tipo;
    color;
    zapatos;

    constructor(propiedades){
        this.tipo = propiedades.tipo;
        this.color = propiedades.color;
        this.zapatos = propiedades.zapatos;
    }
}

export function crearMuneca(propiedades){

    let muneca = new Cuerpo(propiedades);
    muneca.asignarCabeza(new Cabeza(propiedades));
    muneca.asignarCabello(new Cabello(propiedades));
    muneca.asignarRopa(new Ropa(propiedades));
    return muneca;
}