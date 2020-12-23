const Vue = window.Vue
Vue.config.productionTip = false
//import Demo from './Demo.vue'

new Vue({
    data: {n: 0,},
    methods: {
        add() {
            this.n += 1
        },
        y(e){
            console.log(e.target.value)
        }
    },
    template: `
        <div>
            {{n}}
            <button @click="add">+1</button>
            <hr/>
            <a @click.prevent href="https://www.baidu.com">baidu</a>
            <hr/>
            <input @input="y"/>
        </div>
    `,
}).$mount('#app')