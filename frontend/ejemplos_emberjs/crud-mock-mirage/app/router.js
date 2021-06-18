import EmberRouter from '@ember/routing/router';
import config from 'crud-mock-mirage/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('products');
  this.route('product', { path: 'product/:id' });
  this.route('product/new');
  this.route('product/edit', { path: 'product/edit/:id' });
});
