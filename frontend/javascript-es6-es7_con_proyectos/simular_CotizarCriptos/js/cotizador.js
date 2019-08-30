class Cotizador {

    async obtenerMonedasAPI(){

        const urlObtenerMonedas = await fetch("https://l4chsalter-alternative-me-crypto-v1.p.rapidapi.com/v1/ticker/", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "l4chsalter-alternative-me-crypto-v1.p.rapidapi.com",
                "x-rapidapi-key": "d6dcdbe988msh8f93749ea703d68p131e57jsn1fdd3f4ada9f"
            }
        })

        const monedas = await urlObtenerMonedas.json();

        return { monedas }
    }

    async obtenerValores(moneda, criptomoneda){
        const urlConvertir = await fetch(`https://l4chsalter-alternative-me-crypto-v1.p.rapidapi.com/v1/ticker/${criptomoneda}/?convert=${moneda}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "l4chsalter-alternative-me-crypto-v1.p.rapidapi.com",
                "x-rapidapi-key": "d6dcdbe988msh8f93749ea703d68p131e57jsn1fdd3f4ada9f"
            }
        })

        const resultado = await urlConvertir.json();

        return { resultado }
    }
}