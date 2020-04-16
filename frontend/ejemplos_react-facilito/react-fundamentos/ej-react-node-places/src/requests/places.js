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

export {getPlaces, getPlace}



// Mockup data places
export default {
    places: [
        {
            imageUrl: '/img/place-1.jpg',
            title: 'Puente Grijalva',
            description: 'Pedazo de fierro viejo errumbrao',
            address: 'Calle perdida x123'
        },
        {
            imageUrl: '/img/place-2.jpg',
            title: 'Casa por lago',
            description: 'Casa cerca de charco agua puerca',
            address: 'Avenida perdida x456'
        },
        {
            imageUrl: '/img/place-3.jpg',
            title: 'Ducto metalico adornao',
            description: 'Monte con fierro',
            address: 'Calle por xd lugar'
        }
    ]
}