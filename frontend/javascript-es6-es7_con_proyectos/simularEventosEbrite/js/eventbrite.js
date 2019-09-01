class EventBrite {

    constructor(){
        const mytoken = token.tokenInfo();
        this.token_auth = mytoken.clave;
        this.orden = 'date';
    }

    //consultar categorias a la API
    async obtenerCategorias(){
        const resCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        const categorias = await resCategorias.json()

        return { categorias }
    }

    //consultar eventos con datos de busqueda
    async obtenerEventos(evento, categoria){
        const resEventos = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.orden}&categories=${categoria}&token=${this.token_auth}`);

        const eventos = await resEventos.json();

        return { eventos }
    }
}