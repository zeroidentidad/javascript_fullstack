import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueRouter from 'vue-router'
import store from './store.js'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
