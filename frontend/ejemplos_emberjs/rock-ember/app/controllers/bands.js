import Controller from '@ember/controller';
import { action } from '@ember/object';
import Band from 'rock-ember/models/band';
import { empty } from '@ember/object/computed';

export default class BandsController extends Controller {
    isAddingBand=false;
    newBandName='';
    isAddButtonDisabled=empty('newBandName');

    @action
    addBand() {
        this.set('isAddingBand', true);
    }

    @action
    cancelAddBand() {
        this.set('isAddingBand', false);
    }

    @action
    saveBand() {
        let newBand=Band.create({ name: this.newBandName });
        this.model.pushObject(newBand);
        this.set('newBandName', '');
    }
}
