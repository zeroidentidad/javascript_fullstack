import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES=['Condominio', 'Casa adosada', 'Apartamento'];

export default class RentalModel extends Model {
    @attr title;
    @attr owner;
    @attr city;
    @attr location;
    @attr category;
    @attr image;
    @attr bedrooms;
    @attr description;

    get type() {
        if (COMMUNITY_CATEGORIES.includes(this.category)) {
            return 'Comunitario';
        } else {
            return 'Único';
        }
    }
}