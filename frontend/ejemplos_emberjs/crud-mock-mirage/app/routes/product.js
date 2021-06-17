import Route from '@ember/routing/route';

export default class ProductRoute extends Route {
    model(params) {
        return this.store.findRecord('product', params.id);
    }
}
