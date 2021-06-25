import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BandsController extends Controller {
    isAddingBand=false
    newBandName=''

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
        // Create a new band
    }
}
