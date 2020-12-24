<template>
    <div id="app">
        <label>
            <input type="checkbox" v-model="x"/>
            <span>x:{{x}}</span>
        </label>
    </div>
</template>

<script>
    export default {
        name:'App',
        data(){
            return{
                x:true
            }
        },
        components:{}
    }
</script>

<style lang="scss">
</style>
