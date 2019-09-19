import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyD8u-aNDS9Na00fIrWGYoOHzulUIEC_Jmo",
  authDomain: "vue-asientos.firebaseapp.com",
  databaseURL: "https://vue-asientos.firebaseio.com",
  projectId: "vue-asientos",
  storageBucket: "",
  messagingSenderId: "193027302958",
  appId: "1:193027302958:web:42ecb15a26d705f811a1bf"
};
firebase.initializeApp(firebaseConfig);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
