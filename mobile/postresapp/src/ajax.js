const apiDev = 'https://recipe-puppy.p.rapidapi.com/'

export default {
    async fetchInicial(){
        try {
            const response = await fetch(apiDev + '?p=1&i=onions%2Cgarlic&q=omelet', {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
                    "x-rapidapi-key": "d6dcdbe988msh8f93749ea703d68p131e57jsn1fdd3f4ada9f"
                }
});
            const responseJson = await response.json();
            return responseJson.results; //la prop de interes que retorna la api
        } catch (error) {
            console.log(error);
        }
    }
}