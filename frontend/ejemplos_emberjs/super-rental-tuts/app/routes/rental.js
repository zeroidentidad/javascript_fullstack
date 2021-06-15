import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES=['Condominio', 'Casa adosada', 'Apartamento'];

export default class RentalRoute extends Route {
    async model(params) {
        let response=await fetch(`/api/rentals/${params.rental_id}.json`);
        let { data }=await response.json();

        let { id, attributes }=data;
        let type;

        if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
            type='Comunitario';
        } else {
            type='Único';
        }

        return { id, type, ...attributes };
    }
}