import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals tuts', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');    
    assert.dom('h2').hasText('Bienvenido a Super Rentals!');

    assert.dom('.jumbo a.button').hasText('Sobre nosotros');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');    
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');  
    assert.dom('h2').hasText('Acerca de Super Rentals');

    assert.dom('.jumbo a.button').hasText('Contactenos');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/getting-in-touch');
  });

  test('visiting /getting-in-touch', async function (assert) {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');    
    assert.dom('h2').hasText('Contacta con nosotros');

    assert.dom('.jumbo a.button').hasText('Acerca');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });  

  test('navigating using the nav-bar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('SuperRentals');
    assert.dom('nav a.menu-about').hasText('Acerca');
    assert.dom('nav a.menu-contact').hasText('Contacto');

    await click('nav a.menu-about');
    assert.equal(currentURL(), '/about');

    await click('nav a.menu-contact');
    assert.equal(currentURL(), '/getting-in-touch');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });  
});
