import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES=['Condominio', 'Casa adosada', 'Apartamento'];

export default class IndexRoute extends Route {
    async model() {
        let response=await fetch('/api/rentals.json');
        let { data }=await response.json();

        return data.map((model) => {
            let { attributes }=model;
            let type;

            if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
                type='Comunitario';
            } else {
                type='Único';
            }

            return { type, ...attributes };
        });
    }
}