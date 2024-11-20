<template>
   <!-- 统计和清空 -->
 <footer class="footer">
   <!-- 统计 -->
   <span class="todo-count">合 计:<strong> {{ list.length }} </strong></span>
   <!-- 清空 -->
   <button  @click="clean" class="clear-completed">
     清空任务
   </button>
 </footer>
</template>

<script>
export default {
  props:{
    list:Array
  },
  methods:{
    clean(){
      this.$emit('clean')//此时不用传参，父组件可以触发事件
    }
  }
}
</script>

<style>

</style>