import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA5nB2538FHQnOmzE4mQp6l3y_4w6KKTuU",
    authDomain: "musicapp-rn.firebaseapp.com",
    databaseURL: "https://musicapp-rn.firebaseio.com",
    projectId: "musicapp-rn",
    storageBucket: "",
    messagingSenderId: "430730420840",
    appId: "1:430730420840:web:b08f2d01269cf03c"
};

firebase.initializeApp(firebaseConfig);

export const fbauth = firebase.auth();
export const fbdb = firebase.database();

export default firebase;