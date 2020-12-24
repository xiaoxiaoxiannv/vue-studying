<template>
    <div id="app">
        周末干什么:{{x}}
        <label>
            <input name="want" type="radio" v-model="x" :value="1"/>
            <span>看电影</span>
        </label>
        <label>
            <input name="want" type="radio" v-model="x" :value="2"/>
            <span>游泳</span>
        </label>
        <label>
            <input name="want" type="radio" v-model="x" :value="3"/>
            <span>徒步</span>
        </label>
    </div>
</template>

<script>
    export default {
        name:'App',
        data(){
            return{
                x:''
            }
        },
        components:{}
    }
</script>

<style lang="scss">
</style>
