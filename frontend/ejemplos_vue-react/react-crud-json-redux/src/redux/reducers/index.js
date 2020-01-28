import {combineReducers} from 'redux'
import publicacionesReducer from './publicacionesReducer'
import validacionReducer from './validacionReducer'

export default combineReducers({
    publicaciones: publicacionesReducer,
    error: validacionReducer 
})