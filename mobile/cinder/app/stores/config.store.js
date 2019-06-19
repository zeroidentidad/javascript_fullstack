export default class ConfigStore {
    constructor(){
        this.splashTime = 1500; // tiempo en milisegundos = 1.5 segundos
        this.splashImg = require('../../images/splash.png'); 
    }

    get SplashImg() {
        return this.splashImg
    }
    get SplashTime() {
        return this.splashTime
    }   

}