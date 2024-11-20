<template>
  <div id="app">
   <BaseSelect
   :cityId="selsctId"
   @changeId="selectId = $event"
   ></BaseSelect>
   <!-- 此时的@changeId="对应的根性逻辑"，将传过来的值更新给最新的selectId，
    这种直接更新的可以直接写行内，此时@changeId="selectId = 新值" 新值是通过子传父传过来的
    此时传递的是当前事件changeid的形参，在模板当中获取形参用 $event
  -->
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
        // 1、父传子
        selectId:'102'
        
      }
    }
}
</script>

<style>

</style>