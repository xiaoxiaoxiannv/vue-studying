<template>
    <div id="app">
        登陆
        <form>
            <label>
                <span>用户名</span>
                <input type="text" v-model="user.username"/>
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
        components:{}
    }
</script>

<style lang="scss">
</style>
