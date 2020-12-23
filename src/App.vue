<template>
  <div class="app">
   <button v-on2:click="hi">点我</button>
  </div>
</template>

<script>
export default {
  methods:{
    hi(){
      console.log('hi')
    }
  },
  directives:{
    'on2':{
      inserted(el,info){
        el.addEventListener(info.arg,info.value)
      },
      unbind(el,info){
        el.removeEventListener(info.arg,info.value)
      }
    }
  }
}
</script>

<style lang="scss">

</style>
