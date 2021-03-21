<template>
  <div>
    Child:这是我爸爸传给我的数据 {{name}}
    <br/>
    <button @click="sendNumtoParent">点击我可以向我爸爸传数据</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ['name'],
  data(){
    return{
      num:0
    }
  },
  methods:{
    sendNumtoParent(){
      this.$emit('getNum',this.num+=1)
    }
  }
}
</script>
