export default function() {
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

  this.get('/products');

  this.get('/products/:id');

  this.post('/products', 'product');

  this.del('/products/:id', 'product');

  this.put('/products/:id', 'product');
}