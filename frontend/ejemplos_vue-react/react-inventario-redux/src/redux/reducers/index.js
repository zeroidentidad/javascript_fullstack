import {combineReducers} from 'redux'
import articulosReducer from './articulosReducer'
import validacionReducer from './validacionReducer'

export default combineReducers({
    articulos: articulosReducer,
    error: validacionReducer
})
