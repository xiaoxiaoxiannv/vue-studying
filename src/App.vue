<template>
    <div id="app">
      <Parent></Parent>
    </div>
</template>

<script>
import Parent from "@/components/Parent";
    export default {
        name:'App',
      comments:{
        Parent
      },
        data(){
            return{
               user:{
                   username: 0,
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
        components:{Parent}
    }
</script>

<style lang="scss">
</style>
