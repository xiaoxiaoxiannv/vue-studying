<template>
    <div id="app">
        {{user}}
        <hr>
        登陆
        <form @submit.prevent="onSubmit">
            <label>
                <span>用户名</span>
                <input type="text" v-model.lazy="user.username"/>
            </label>
            <label>
                <span>密码</span>
                <input type="password" v-model="user.password"/>
            </label>
            <button>提交</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:'App',
        data(){
            return{
               user:{
                   username: '',
                   password: ''
               },
                x:[]
            }
        },
        methods:{
            onSubmit(){
                console.log(this.user)
            }
        },
        components:{}
    }
</script>

<style lang="scss">
</style>
