console.log(window.Vue)
const Vue = window.Vue
Vue.config.productionTip = false
import Demo from './Demo.vue'

new Vue({
    components:{Demo},
    data() {
        return {
            n: 0,
            array: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    },
    template: `
        <div class="red">
            {{n}}
            <button @click="add">+1</button>
            <hr>
            <Demo/>
            {{filter()}}
        </div>
    `,
    methods: {
        add() {
            this.n += 1
        },
        filter(){
            return this.array.filter(i => i%2 ===0)
        }
    }
}).$mount('#app')