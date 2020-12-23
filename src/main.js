console.log(window.Vue)
const Vue = window.Vue
Vue.config.productionTip = false
//import Demo from './Demo.vue'

new Vue({
    data: {
        user:{
            emial: "fangyinghang@qq.com",
            nickname: "方方",
            phone: "13812312312"
        }
    },
    computed:{
      displayName:{
          get(){
              const user = this.user
              return user.nickname || user.phone || user.emial
          },
          set(value){
            this.user.nickname = value
          }
      }
    },
    template: `
        <div>
            {{displayName}}
            <button @click="displayName='圆圆'">set</button>
        </div>
    `,
}).$mount('#app')