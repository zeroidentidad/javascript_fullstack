import {combineReducers} from 'redux';
import navState from './navReducer';
import apiState from './apiReducer';
import {reducer as form} from 'redux-form';

export default combineReducers({navState, apiState, form})
