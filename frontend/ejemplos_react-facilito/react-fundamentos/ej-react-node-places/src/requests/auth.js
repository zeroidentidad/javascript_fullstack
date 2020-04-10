function login(credentials) {
    return fetch("http://localhost:4000/sessions",{
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
    return fetch("http://localhost:4000/users",{
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