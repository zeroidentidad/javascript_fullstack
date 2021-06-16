import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | rental', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it has the right type', function (assert) {
    let store = this.owner.lookup('service:store');
    let rental=store.createRecord('rental', {
      id: 'grand-old-mansion',
      title: 'Gran mansión antigua',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      location: {
        lat: 18.06557,
        lng: -93.17302,
      },
      category: 'Inmuebles',
      bedrooms: 15,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description:
        'Esta gran mansión antigua se asienta sobre más de 100 acres de colinas y densos bosques de secuoyas.',
    });

    assert.equal(rental.type, 'Único');

    rental.category='Condominio';
    assert.equal(rental.type, 'Comunitario');

    rental.category='Casa adosada';
    assert.equal(rental.type, 'Comunitario');

    rental.category='Apartamento';
    assert.equal(rental.type, 'Comunitario');

    rental.category='Inmuebles';
    assert.equal(rental.type, 'Único');
  });
});
