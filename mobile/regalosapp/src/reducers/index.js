import {combineReducers} from 'redux';
import user from './user';
import events from './events';

export default combineReducers({
    user: user,
    events: events
})