import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductFormComponent extends Component {
    @service router;
    @service store;
    
    newName='';
    newType;

    @action
    setName(e) {
        this.newName=e.target.value;
    }

    @action
    setItemValue(e) {
        e.preventDefault();
        this.newType=e.target.value;
    }

    @action
    editProduct(product) {
        this.store.findRecord('product', product.id).then(function (product) {
            product.name=this.newName;
            product.type=this.newType;

            product.save();
        });

        this.router.transitionTo('/products');
    }
}
