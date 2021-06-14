import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals tuts', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /super-rentals-tuts', async function(assert) {
    await visit('/super-rentals-tuts');

    assert.equal(currentURL(), '/super-rentals-tuts');
  });
});
