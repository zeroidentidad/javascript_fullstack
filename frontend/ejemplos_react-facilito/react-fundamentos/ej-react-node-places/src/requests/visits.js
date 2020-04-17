import secrets from "../config/secrets";

function getAllForPlace(slug){
   return fetch(`${secrets.url}/places/${slug}/visits`)
         .then(response => response.json())
         .catch(console.log);
}

function add(jwt, place, observation, reaction) {
   const data = {
      _place: place._id,
      observation, 
      reaction
   }
   return fetch(`${secrets.url}/places/${place.slug}/visits`,{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Authorization': `Bearer ${jwt}`
      }
   }).then(response => response.json()).catch(console.log);
}

export {add, getAllForPlace};