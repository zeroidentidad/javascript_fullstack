import Route from '@ember/routing/route';

export default class BandsBandRoute extends Route {
	model() {
		return this.modelFor('bands.band');
	}
}
