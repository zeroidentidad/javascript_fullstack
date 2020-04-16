import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import persistState from 'redux-localstorage'
import { routerReducer } from "react-router-redux";
import thunk from 'redux-thunk'
import reducers from "../reducers";

const enhancer = compose(
    persistState('user')
)

const rootReducer=combineReducers({
    ...reducers,
    router: routerReducer
})

export default function configureStore(middleware) {
    return createStore(rootReducer, enhancer, applyMiddleware(middleware, thunk))
}