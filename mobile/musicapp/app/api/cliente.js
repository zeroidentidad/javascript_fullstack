
const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=mexico&api_key=2202bb0576206eeca2f26b52c9f06223&format=json';

function getArtistas(params) {
   return fetch(URL)
       .then(respuesta => respuesta.json())
       .then(datos => datos.topartists.artist)
       .then(artistas => artistas.map(artist => ({
           //return {
               id: artist.mbid,
               name: artist.name,
               image: `https://picsum.photos/id/${Math.floor(Math.random()*1000)}/200/200?blur=2`,
               likes: 0,
               comentarios: 0,
           //}
       })))
}

//export default getArtistas;
export { getArtistas };