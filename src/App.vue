<template>
    <div id="app">
        周末干什么:{{x}}
        <hr/>
        <select v-model="x">
            <option value="">请选择</option>
            <option v-for="item in array" :value="item.value" :key="item.value">{{item.text}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name:'App',
        data(){
            return{
                array:[
                    {text:'看电影',value:1},
                    {text:'游泳',value:2},
                    {text:'徒步',value:3}
                ],
                x:''
            }
        },
        components:{}
    }
</script>

<style lang="scss">
</style>
