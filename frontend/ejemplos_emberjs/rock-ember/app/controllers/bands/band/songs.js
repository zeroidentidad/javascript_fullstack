import Controller from '@ember/controller';
import Song from 'rock-ember/models/song';
import { empty } from '@ember/object/computed';

export default Controller.extend({
    isAddingSong: false,
    newSongTitle: '',
    isAddButtonDisabled: empty('newSongTitle'),
    actions: {
        addSong() {
            this.set('isAddingSong', true);
        },
        cancelAddSong() {
            this.set('isAddingSong', false);
        },
        saveSong(event) {
            event.preventDefault();
            let newSong=Song.create({ title: this.newSongTitle });
            this.model.songs.pushObject(newSong);
            this.set('newSongTitle', '');
        },
        updateRating(song, rating) {
            song.set('rating', song.rating === rating ? 0 : rating);
        }
    }
});