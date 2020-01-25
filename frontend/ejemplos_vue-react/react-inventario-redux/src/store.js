import {createStore} from 'redux'
import reducer from './redux/reducers'
import { obtenerStateStorage, guardarStateStorage } from './localstorage';

// Definir state inicial
// const initialState = [];

// Obtener articulos de localstorage
const storageState = obtenerStateStorage();

const store = createStore(
    reducer,
    //initialState,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    guardarStateStorage({
        articulos: store.getState().articulos
    })
})

export default store;