<template>
    <div>
        Child3
    </div>
</template>
<script>
    import MyVue from "../MyVue";
    export default {
        extends: MyVue,
        data(){
            return{
                name:'Child3'
            }
        },
    }
</script>