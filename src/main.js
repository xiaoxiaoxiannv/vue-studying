console.log(window.Vue)
const Vue = window.Vue
Vue.config.productionTip = false
//import Demo from './Demo.vue'

new Vue({
    data: {
        n: 0,
        history: [],
        inUndoMode: false
    },
    watch: {
        n(newValue, oldValue) {
            if(!this.inUndoMode){
                this.history.push({from: oldValue, to: newValue})
            }
        }
    },
    methods: {
        add1() {
            this.n += 1
        },
        add2() {
            this.n += 2
        },
        minus1() {
            this.n -= 1
        },
        minus2() {
            this.n -= 2
        },
        undo(){
            const last = this.history.pop()
            const old = last.from
            this.inUndoMode = true
            this.n = old;
            this.$nextTick(()=>{
                this.inUndoMode = false
            },0)
        }
    },
    template: `
        <div>
            {{n}}
            <button @click="add1">+1</button>
            <button @click="add2">+2</button>
            <button @click="minus1">-1</button>
            <button @click="minus2">-2</button>
            <hr>
            {{history}}
            <button @click="undo">撤销</button>
        </div>
    `,
}).$mount('#app')