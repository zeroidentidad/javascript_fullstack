
### Hacer:

- Un catalogo de productos, que puedas agregar, editar y ver una lista de lo que hay.

- Ruta de catálogo: Sale una tabla de productos, que las columnas sean id, nombre y tipo.

- Ruta de nuevo producto: Un form con 2 inputs, 1 input de texto abierto para el nombre, 1 select con 3 opciones (juegos de mesa, videojuego o juguete)

- Ruta de editar producto: La misma form de nuevo producto, pero precargada con el producto que estas editando.

- Ruta de detalle de producto: Sólo un HTML que diga de que `<h1>Nombre de juego</h1>, <h2>Tipo</2>`

y ya, súper sencillo, sin CSS sólo el html planito aunque se vea feo no pasa nada, el punto es que armes todo el CRUD y practiques lo que aprendiste.

usa ember mirage para el server, ese addon tiene todos los endpoints necesarios para armar el server


### Notas:

y lo de ember engines, déjalo si quieres para después, ese sólo es para lectura y que veas como cambia la estructura de los archivos

va, revisa lo del ember mirage bien, eso te ayudará a practicar con ember data mucho más chido

el único detalle es que atrapa los requests antes de que salgan, entonces no aparecen en el network tab. Pero imprime toda la información del request y response en console

te lo digo para que no batalles cuando empieces a probarlo y digas, qué onda, no sale ningún request, jaja mirage los esta atrapando y los imprime en console