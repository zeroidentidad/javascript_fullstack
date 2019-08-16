
const cargarPosts = document.querySelector('#cargar').addEventListener('click', cargarData);

function cargarData () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts', true);

    xhr.onload =  function ()  {
        if (this.status === 200) {
            const posts = JSON.parse(this.responseText);

            let contenido= ``;
            posts.forEach(post => {
                contenido += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                `;
            });

            document.getElementById('listado').innerHTML = contenido;
        }
    }

    xhr.send();
}