import Vue from 'vue'
import App from './App.vue'
import './helpers/firebase'
import { rtdbPlugin as VueFire } from 'vuefire'

Vue.use(VueFire)

new Vue({
  el: '#app',
  render: h => h(App)
})
