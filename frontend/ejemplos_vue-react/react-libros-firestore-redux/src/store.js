import {createStore, combineReducers, compose} from 'redux'
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase'
import {reduxFirestore, firestoreReducer} from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

//config firestore
const firebaseConfig =  {
    apiKey: "AIzaSyD_a05cwyrhb42i69BwMWRvQAChQ2FryUw",
    authDomain: "libros-store.firebaseapp.com",
    databaseURL: "https://libros-store.firebaseio.com",
    projectId: "libros-store",
    storageBucket: "libros-store.appspot.com",
    messagingSenderId: "646994303453",
    appId: "1:646994303453:web:d6302826324337ba4dbe34"    
}

//inicializar firebase
firebase.initializeApp(firebaseConfig)

//config react-redux
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

// crear el enhacer con compose de redux y firestore
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

// Reducers 
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

// state inicial
const initialState = {};

// Create el store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;