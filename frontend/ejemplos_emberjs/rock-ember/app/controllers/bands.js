import Controller from '@ember/controller';
import Band from 'rock-ember/models/band';
import { empty } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
    isAddingBand: false,
    newBandName: '',
    isAddButtonDisabled: empty('newBandName'),
    router: service(),
    actions: {
        addBand() {
            this.set('isAddingBand', true);
        },
        cancelAddBand() {
            this.set('isAddingBand', false);
        },
        saveBand(event) {
            event.preventDefault();
            let newBand=Band.create({ name: this.newBandName });
            this.model.pushObject(newBand);
            this.setProperties({
                newBandName: '',
                isAddingBand: false
            });
            this.router.transitionTo('bands.band.songs', newBand);
        }
    }
});