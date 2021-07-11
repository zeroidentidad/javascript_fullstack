import Model, { hasMany } from '@ember-data/model';

export default class HomeModel extends Model {
    @hasMany('cat') cats;
}
