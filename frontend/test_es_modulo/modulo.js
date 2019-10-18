const variableModulo = 'Valor variableModulo';

export default variableModulo;

class Componente {
    constructor(propiedades='Valor default') {
        this.propiedades = propiedades;
    }

    funcionComponente() {
        console.log(`Valores recibidos: ${JSON.stringify(this.propiedades)}`);
    }
}

export class MiClase extends Componente {
    constructor(propiedades, mipropiedad= 'Mi valor default') {
        super(propiedades);
        this.mipropiedad = mipropiedad;
    }

    miFuncion() {
        super.funcionComponente()
        console.log(`Mas ${JSON.stringify(this.mipropiedad)}`);
    }
}