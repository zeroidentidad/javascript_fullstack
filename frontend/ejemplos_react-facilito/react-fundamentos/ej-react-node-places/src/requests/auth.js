import secrets from "../config/secrets";

function login(credentials) {
    return fetch(`${secrets.url}/sessions`,{
        method: "POST",
        body: JSON.stringify(credentials),
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
    .then(response=>{
        return response.json()
    })
    .catch(error => {
        console.log(error)
    })    
}

function signUp(credentials) {
    return fetch(`${secrets.url}/users`,{
        method: "POST",
        body: JSON.stringify(credentials),
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
    .then(response=>{
        return response.json()
    })
    .catch(error => {
        console.log(error)
    })    
}

export {login, signUp}