<template>
    <div v-x class="child">
        {{money}}
        <button @click="$emit('update:money',money-100)">
            <span>花钱</span>
        </button>
    </div>
</template>
<script>
    export default {
        props: ['money'],
        directives:{
            x:{
                inserted(el) {
                    el.addEventListener('click', () => {
                        console.log('x')
                    })
                }
            }
        }
    }
</script>
<style scoped>
    .child {
        border: 3px solid green;
    }
</style>