<template>
    <div id="app">
        <textarea v-model="message" placeholder="edit me"/>
        <p>Message is:{{message}}</p>
        <hr/>
        <button @click="message = 'frank'">set message to frank</button>
    </div>
</template>

<script>
    export default {
        name:'App',
        data(){
            return{
                message:undefined
            }
        },
        components:{}
    }
</script>

<style lang="scss">
</style>
