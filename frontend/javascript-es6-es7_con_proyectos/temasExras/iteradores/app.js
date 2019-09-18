iterador = (elemento)=>{

    let i=0;

    return {
        siguiente: ()=>{
            let fin = (i >= elemento.length);

            let valor = !fin ? elemento[i++] : undefined;

            return {
                fin: fin,
                valor: valor
            }
        }
    }
}

const elementos = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];

const recorrido = iterador(elementos);

console.log(recorrido.siguiente());
console.log(recorrido.siguiente());
console.log(recorrido.siguiente());
console.log(recorrido.siguiente());
console.log(recorrido.siguiente());