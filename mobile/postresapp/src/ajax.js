const apiDev = 'https://recipe-puppy.p.rapidapi.com/'
const header = {
    "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
    "x-rapidapi-key": "d6dcdbe988msh8f93749ea703d68p131e57jsn1fdd3f4ada9f"
}

export default {
    async fetchInicial(){
        try {
            const response = await fetch(apiDev + '?p=1', {
                "method": "GET",
                "headers": header
            });
            const responseJson = await response.json();
            return responseJson.results; //la prop de interes que retorna la api
        } catch (error) {
            console.log(error);
        }
    },
    async fetchPostreDetail(postreId) {
        //console.log(apiDev + '?' + postreId)
        try {
            const response = await fetch(apiDev + '?' + postreId, {
                "method": "GET",
                "headers": header
            });            
            const responseJson = await response.json();
            return responseJson.results;
        } catch (error) {
            console.error(error);
        }
    },
    async fetchPostreSearch(searchTerm) {
        //console.log(apiDev + '?q=' + searchTerm)
        try {
            const response = await fetch(apiDev + '?q=' + searchTerm, {
                "method": "GET",
                "headers": header
            });
            const responseJson = await response.json();
            return responseJson.results;
        } catch (error) {
            console.error(error);
        }
    }
}