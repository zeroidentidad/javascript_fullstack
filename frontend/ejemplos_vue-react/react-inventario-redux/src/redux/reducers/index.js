import {combineReducers} from 'redux'
import articulosReducer from './articulosReducer'

export default combineReducers({
    articulos: articulosReducer
})
