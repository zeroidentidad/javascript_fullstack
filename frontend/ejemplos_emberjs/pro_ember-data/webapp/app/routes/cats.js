import Route from '@ember/routing/route';

export default class CatsRoute extends Route {
    model() {
        return this.store.findAll('cat');
    }
}
