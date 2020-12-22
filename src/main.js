import Vue from 'vue'
 //import App from './App.vue'
//
// Vue.config.productionTip = false
import Demo from './Demo'
new Vue({
  el:'#app',
  render(h){
    return h(Demo)
  }
})