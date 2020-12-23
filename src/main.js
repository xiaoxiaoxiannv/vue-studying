console.log(window.Vue)
const Vue = window.Vue
Vue.config.productionTip = false
//import Demo from './Demo'

new Vue({
    data(){
        return{
            n: 0
        }
    },
    template: `
        <div class="red">
            {{n}}
            <button @click="add">+1</button>
        </div>
     `,
  methods: {
      add(){
        this.n += 1
      }
  }
}).$mount('#app')