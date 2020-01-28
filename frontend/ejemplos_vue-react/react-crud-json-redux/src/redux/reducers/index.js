import {combineReducers} from 'redux'
import publicacionesReducer from './publicacionesReducer'

export default combineReducers({
    publicaciones: publicacionesReducer, 
})