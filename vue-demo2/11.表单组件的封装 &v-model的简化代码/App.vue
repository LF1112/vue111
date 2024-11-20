<template>
  <div id="app">
   <BaseSelect v-model=""></BaseSelect>
   <!-- v-model =  :value +@input -->
   <!-- 能直接绑v-model的前提是子组件当中已经按v-model的要求配合好了 -->

  
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'

export default {
    components:{
      BaseSelect,
    },

    data(){
      return{
        selectId:'102'
        
      }
    }
}
</script>

<style>

</style>