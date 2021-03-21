<template>
  <div>
    Parent:下面是我儿子传给我的值:
    <br/>
    {{num}}
    <Child :eventName="name" @getNum="getNum"></Child>
  </div>
</template>

<script>
import Child from "@/components/Child";

export default {
  name: "Parent",
  components: {
    Child
  },
  data() {
    return {
      name:'回家吃饭了',
      num:''
    }
  },
  methods:{
    getNum(num){
      this.num=num
    }
  }
}
</script>
