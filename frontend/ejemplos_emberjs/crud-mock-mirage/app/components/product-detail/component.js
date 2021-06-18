import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductDetailComponent extends Component {
    @service router;

    @action
    async removeProduct(product) {
        await product.destroyRecord();
        this.router.transitionTo('/products');
    }
}
