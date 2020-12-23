console.log(window.Vue)
const Vue = window.Vue
Vue.config.productionTip = false
//import Demo from './Demo.vue'

let id = 0;
const createUser = (name, gender) => {
    id += 1;
    return {id: id, name: name, gender: gender}
}
new Vue({
    data() {
        return {
            users: [
                createUser('方方', '男'),
                createUser('圆圆', '女'),
                createUser('小新', '男'),
                createUser('小葵', '女')
            ],
            gender: ''
        }
    },
    computed: {
        displayUsers() {
            console.log('计算了一次')
            const hash = {
                male: '男',
                female: '女'
            }
            const {users, gender} = this
            if (gender === '') {
                return users
            } else if (typeof gender === 'string') {
                return users.filter(u => u.gender === hash[gender])
            } else  {
                throw new Error('gender的值是意外的值')
            }
        }
    },
    template: `
        <div>
            <button @click="gender = ''">全部</button>
            <button @click="gender = 'male'">男</button>
            <button @click="gender = 'female'">女</button>
            <ul>
                <li v-for="(u,index) in displayUsers" :key="index">{{u.name}} - {{u.gender}}</li>
            </ul>
        </div>
    `,
}).$mount('#app')