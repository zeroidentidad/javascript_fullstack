import Route from '@ember/routing/route';

export default class ListsRoute extends Route {
    model(){
        return this.store.findAll('list');
    }
}
