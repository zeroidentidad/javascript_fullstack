import Route from '@ember/routing/route';

export default class BandsBandIndexRoute extends Route {

    redirect(band) {
        if (band.description) {
            this.transitionTo('bands.band.details');
        } else {
            this.transitionTo('bands.band.songs');
        }
    }
}
