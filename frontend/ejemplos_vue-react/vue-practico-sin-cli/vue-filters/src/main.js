import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('widthg', { // directiva global
  inserted: function (el, binding/*, vnode*/) {
    //console.log(binding.arg) -> color
    el.style.width = binding.value;
    el.style.background = 'red';
  }  
})

new Vue({
  render: h => h(App),
}).$mount('#app')
