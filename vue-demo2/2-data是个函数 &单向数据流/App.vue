<template>
  <div id="app">
    <BaseCount 
    changeCount="handleChange"
    :count="count">
  </BaseCount>
  </div>
</template>

<script>

import BaseCount from'./compCountnts/BaseCount.vue'

export default {
  name:'App',
  comments:{
    BaseCount,
  },
  data:{
    return {
      count:666
    }
  },
  methods:{
   handleChange(newCount){
    // console.log(newCount);
    this.count=newCount
   } 
  }
}
</script>

<style>

</style>