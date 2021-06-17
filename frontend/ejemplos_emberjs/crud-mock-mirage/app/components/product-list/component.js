import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ProductListComponent extends Component {
    @action
    showProduct(id) {
        alert(`Go to product detail id: ${id}`);
    }
}
