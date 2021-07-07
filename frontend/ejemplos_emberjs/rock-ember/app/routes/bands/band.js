import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsBandRoute extends Route {
	router=service()

	model(params) {
		let bands = this.modelFor('bands');
		return bands.findBy('slug', params.slug);
	}	
}
