import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/detailed', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      rental: {
        id: 'grand-old-mansion',
        title: 'Gran mansión antigua',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        location: {
          lat: 18.06557,
          lng: -93.17302,
        },
        category: 'Inmuebles',
        type: 'Único',
        bedrooms: 15,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description:
          'Esta gran mansión antigua se asienta sobre más de 100 acres de colinas y densos bosques de secuoyas.',
      },
    });
  });

  test('it renders a header with a share button', async function (assert) {
    await render(hbs`<Rental::Detailed @rental={{this.rental}} />`);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo h2').containsText('Gran mansión antigua');
    assert
      .dom('.jumbo p')
      .containsText('un buen lugar para quedarse cerca en San Francisco');
    assert.dom('.jumbo a.button').containsText('Compartir en Twitter');
  });

  test('it renders detailed information about a rental property', async function (assert) {
    await render(hbs`<Rental::Detailed @rental={{this.rental}} />`);

    assert.dom('article').hasClass('rental');
    assert.dom('article h3').containsText('Acerca de Gran mansión antigua');
    assert.dom('article .detail.owner').containsText('Veruca Salt');
    assert.dom('article .detail.type').containsText('Único – Inmuebles');
    assert.dom('article .detail.location').containsText('San Francisco');
    assert.dom('article .detail.bedrooms').containsText('15');
    assert.dom('article .image').exists();
    assert.dom('article .map').exists();
  });
});
