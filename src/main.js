console.log(window.Vue)
const Vue = window.Vue
Vue.config.productionTip = false
import Demo from './Demo.vue'

new Vue({
   components:{Demo},
    data:{
      visible:true
    },
    template:`
        <div>
            <button @click="toggle">toggle</button>
            <hr>
            <Demo v-if="visible === true"/>
        </div>
    `,
    methods:{
       toggle(){
           this.visible = !this.visible
       }
    }
}).$mount('#app')