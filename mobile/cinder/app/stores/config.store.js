import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDw2U7ebSWhtIbOMdoRDXmcCYkbxygPbxQ",
    authDomain: "cinder-rn.firebaseapp.com",
    databaseURL: "https://cinder-rn.firebaseio.com",
    projectId: "cinder-rn",
    storageBucket: "cinder-rn.appspot.com",
    messagingSenderId: "338359173687",
    appId: "1:338359173687:web:451e87574005f666"
};

export default class ConfigStore {
    constructor(){
        firebase.initializeApp(firebaseConfig)
        this.splashTime = 1500; // tiempo en milisegundos = 1.5 segundos
        this.splashImg = require('../../images/splash.png'); 
        this.loginBG = require('../../images/login.jpg'); 
    }

    get SplashImg() {
        return this.splashImg
    }
    get SplashTime() {
        return this.splashTime
    }
    get LoginBG() {
        return this.loginBG
    }   

}