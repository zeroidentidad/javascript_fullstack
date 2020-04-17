import secrets from "../config/secrets";

function getPlaces() {
    return fetch(`${secrets.url}/places`)
    .then(data=>{
        return data.json()
    })
    .catch(error => {
        console.log(error)
    })
}

function getPlace(slug) {
    return fetch(`${secrets.url}/places/${slug}`)
        .then(data => {
            return data.json()
        })
        .catch(error => {
            console.log(error)
        })    
}

function createPlace(data, jwt) {
    let formData=new FormData()
    for(let field in data){
        formData.append(field, data[field])
    }
    return fetch(`${secrets.url}/places`,{
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(dataR=>{
        return dataR.json()
    })
}

export {getPlaces, getPlace, createPlace}