import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

/** Custom Reducers */
import buscarAsistenciaReducer from './reducers/buscarAsistenciaReducer';

//Conf firestore:
const firebaseConf = {
    apiKey: "AIzaSyC4qI7Gm4lDRlAqLs_XKwwpnhjkjRo7g7c",
    authDomain: "techfestdb.firebaseapp.com",
    databaseURL: "https://techfestdb.firebaseio.com",
    projectId: "techfestdb",
    storageBucket: "techfestdb.appspot.com",
    messagingSenderId: "218925457627",
    appId: "1:218925457627:web:94731c445ae92bc6536cfe"    
}

firebase.initializeApp(firebaseConf);

//Conf react-redux:
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

//Enhacer con compose de redux y firestore
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

//Reducers 
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    asistencia: buscarAsistenciaReducer
})

//state inicial
const initialState = {};

//Crear store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
export default store;