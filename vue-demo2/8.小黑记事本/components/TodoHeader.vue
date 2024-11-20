<template>
  <!-- 输入框 -->
  <header class="header">
     <h1>小黑记事本</h1>
     <input 
        @keyup.enter="handleAdd"
        v-model="todoname"  placeholder="请输入任务" class="new-todo" />
     <button @click="handleAdd" class="add">添加任务</button>
   </header>
</template>

<script>
export default {
    data(){
        return{
            todoname:''
        }
    },
    methods:{
        handleAdd(){
            if(this.todoname.trim() === ''){
                 alert('请输入正确的事件名')
                 return
            }else{
                this.$emit('add',this.todoname)
                this.todoname=''//添加完后将输入框设为空
            }
           
    }

}
</script>

<style>

</style>