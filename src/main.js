import Vue from 'vue'
 //import App from './App.vue'
//
Vue.config.productionTip = false
import Demo from './Demo'
new Vue({
  render(h){
    return h(Demo)
  }
}).$mount('#app')