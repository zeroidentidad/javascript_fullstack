import Model, { attr, belongsTo } from '@ember-data/model';

export default class CatModel extends Model {
  @attr('string') name;
  @attr('number') age;
  @attr('boolean') adopted;
  @attr('date') birthday;
  @belongsTo('home', { async: false }) home;
}
