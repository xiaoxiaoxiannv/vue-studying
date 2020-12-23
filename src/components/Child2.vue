<template>
    <div>
        Child2
    </div>
</template>
<script>
    import MyVue from "../MyVue";

    export default {
        extends: MyVue,
        data() {
            return {
                name: 'Child2'
            }
        },
    }
</script>