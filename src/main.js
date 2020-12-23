import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

Vue.directive('x',{
    inserted(el){
        el.addEventListener('click',()=>{
            console.log('x')
        })
    }
})

new Vue({
    render:h=>h(App)
}).$mount('#app')