class EventBrite {
    constructor(){
        this.token_auth = 'BGGLJ3HTX6RSPQIZ72HY';
        this.orden = 'date';
    }

    //consultar categorias a la API
    async obtenerCategorias(){
        const resCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        const categorias = await resCategorias.json()

        return { categorias }
    }
}