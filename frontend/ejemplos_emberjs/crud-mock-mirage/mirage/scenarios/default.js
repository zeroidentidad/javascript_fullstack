export default function(server) {
  server.create('product', {
    name: 'Cyberpunk 2077',
    type: 'videojuego',
  });

  server.create('product', {
    name: 'Ajedrez',
    type: 'juegos de mesa',
  });

  server.create('product', {
    name: 'Peluche baby Yoda',
    type: 'juguete',
  });
}
