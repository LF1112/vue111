<template>
  <div id="app">
   <BaseForm ref="baseform"></BaseForm>

   <button @cilck="handleget">获取数据</button>
   <button @click="handlereset">重置数据</button>

   <!--
   从父组件中想要调用子组件的方法就用ref和$refs 
    1、先去获取上面的组件  ref="baseform"
        这样起完名后然后就可以在下面代码部分通过this.$refs="baseform"拿到这个组件
    -->
  </div>
</template>

<script>
import BaseForm from './components/BaseForm.vue';

export default {
    components:{
        BaseForm
    },
    methods:{
      handlereset(){
        // 在此函数获取的时候，就直接调用这个方法
        console.log(this.$refs.baseform.resetValues());

      },
      handleget(){
        // 在此函数获取时，直接调用以下方法
        console.log(this.$refs.baseform.getValues());
      }
    }
     
}
</script>

<style>

</style>