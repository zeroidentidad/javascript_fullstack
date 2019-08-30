class Interfaz {
    constructor(){
        this.init()
    }
    init(){
        this.construirSelect()
    }

    construirSelect(){
        cotizador.obtenerMonedasAPI()
        .then(datos => {
            const arrMonedas = datos.monedas;

            arrMonedas.forEach(moneda =>{
                const option = document.createElement('option')
                option.value = moneda.id;
                option.appendChild(document.createTextNode(moneda.name));
                //id html
                criptomoneda.appendChild(option);
            })
        })
    }

    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje))
        // div mensajes
        const divMensaje = document.querySelector('.mensajes')
        divMensaje.appendChild(div);

        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    mostrarResultado(resultado, moneda){

        //quitar resultado anterior
        const resultadoAnterior = document.querySelector('#resultado > div')

        if (resultadoAnterior){
            resultadoAnterior.remove()
        }

        this.mostrarSpinner()

        //segun la moneda
        const etiquetaMoneda = `price_${moneda}`;
        //leer valor del resultado
        const valor = resultado[etiquetaMoneda];

        //opciones localizacion fecha y hora
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", hour12: "false" };

        //unix a local
        const tiempo = new Date(resultado.last_updated * 1000).toLocaleString("es-MX", options)

        let html = '';
        html += `
            <div class="card cyan darken-3">
            <div class="card-content">
                <span class="card-title white-text">Resultado:</span>
                <p>Precio de <b>${resultado.name}</b> a <b>${moneda.toUpperCase()}</b> es: $ <b>${valor}</b></p>
                <p>Variación hora: <b>${resultado.percent_change_1h} %</b></p>
                <p>Variación 24 hrs: <b>${resultado.percent_change_24h} %</b></p>
                <p>Variación 7 días: <b>${resultado.percent_change_7d} %</b></p>
                <p>Ultima actualización: <b>${tiempo}</b></p>
            </div>
            </div>
        `;
        
        setTimeout(() => {
            document.getElementById('resultado').innerHTML = html;

            //ocultar spinner
            document.querySelector('.spinner img').remove()
        }, 2000);
    }

    mostrarSpinner(){
        const spinnerGIF = document.createElement('img');
        spinnerGIF.src = './img/spinner.gif';

        document.querySelector('.spinner').appendChild(spinnerGIF)
    }
}