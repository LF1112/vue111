
<template>
  <div style="border: 3px solid #000; margin: 10px">
   我是App组件
   <!--
     父 → 子 1、给组件标签，以添加属性的方式，传值
   <Son title="myTitle"></Son>此时写死了，要使用动态的属性
   <Son :title="myTitle"></Son>
   -->
   <!-- 
    子 → 父 2、需要对消息进行监听 
    <Son @子组件对应的事件名="父组件的处理函数"></Son>
  -->
   <Son @changeTitle="handleChange"></Son>
  </div>
</template>

<script>

import Son from'./compCountnts/Son.vue'

export default {
  data(){
    return{
      myTitle:'黑马程序员'
    }
  },
  comments:{
    Son,
  },
  // 子 → 父 3.创建一个methods,在methods中提供处理函数，提供逻辑
  methods:{
    handleChange(newTitle){
      // 子 → 父 4.在处理函数的形参当中就能拿到新值，随后进行修改
      this.myTitle =newTitle
    }
  }
}
</script>

<style>

</style>