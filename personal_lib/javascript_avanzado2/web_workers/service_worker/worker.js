/* Service worker  */

// Activo 
self.addEventListener('activate', function (event) {
  console.log("El service worker esta activo");
});

// Escucha por las peticiones de red que provienen desde el contexto principal
self.addEventListener('fetch', (event) => {
  console.log("Petición de red: ", event);
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        return caches.open('v1').then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });  
      });
    })
  );
});


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        './',
        './assets/main.js',
        'assets/images/img1.jpeg',
        'assets/images/img2.jpeg',
        'assets/images/img3.jpeg',
        'assets/images/img4.jpeg',
        'assets/images/img5.jpeg'
      ]);
    })
  );
});