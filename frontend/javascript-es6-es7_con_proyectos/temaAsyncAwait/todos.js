async function leerTodos() {
    const respuesta = await fetch('http://jsonplaceholder.typicode.com/todos');

    const datos = await respuesta.json();

    return datos;
}

leerTodos()
.then(res => console.log(res))