import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductNewController extends Controller {
    @service store;
    newName;
    newType;

    @action
    setItemValue(e) {
        let value=e.target.value;
        e.preventDefault();

        this.newType=value
    }

    @action
    addProduct() {
        console.log(this.newName);
        console.log(this.newType);
        this.store.createRecord('product', {
            name: this.newName,
            type: this.newType
        }).save();
        this.set('newName', "");
    }
}
