import Route from '@ember/routing/route';

export default class BandsBandRoute extends Route {
	model(params) {
		let bands = this.modelFor('bands');
		return bands.findBy('slug', params.slug);
	}	
}
