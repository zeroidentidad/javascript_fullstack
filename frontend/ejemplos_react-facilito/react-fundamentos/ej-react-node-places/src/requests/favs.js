import secrets from '../config/secrets';

export function add(jwt, placeId){
    const data = {
        '_place': placeId
    }
    return fetch(`${secrets.url}/favorites`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json())
    .catch(console.log)
}