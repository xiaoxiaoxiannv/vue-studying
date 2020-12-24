<template>
    <div id="app">
        爱好:{{x}}
        <label>
            <input type="checkbox" v-model="x" :value="1"/>
            <span>看电影</span>
        </label>
        <label>
            <input type="checkbox" v-model="x" :value="2"/>
            <span>游泳</span>
        </label>
        <label>
            <input type="checkbox" v-model="x" :value="3"/>
            <span>徒步</span>
        </label>
    </div>
</template>

<script>
    export default {
        name:'App',
        data(){
            return{
                x:[]
            }
        },
        components:{}
    }
</script>

<style lang="scss">
</style>
