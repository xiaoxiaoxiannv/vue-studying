<template>
    <div class="red">
        {{n}}
        <button @click="add">+1</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                n: 0,
                array: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        },
        created() {
            console.log('出现在内存中，没有出现在页面中')
        },
        mounted() {
            console.log('出现在页面中')
        },
        updated() {
            console.log('更新了')
            console.log(this.n)
        },
        destroyed() {
            console.log('消失了')
        },
        methods: {
            add() {
                this.n += 1
            }
        }
    }
</script>
<style scoped>
    .red {
        color: red;
    }
</style>