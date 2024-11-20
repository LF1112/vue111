<template>
  <div id="app">
    <input v-model="msg1" type="text"> <br><br>
    <!-- 模板中 获取事件的形参 → $event 获取 -->
    <imput :value="msg2" @input="msg2 = $event.target.value" type="text"></imput> <br> <br>
  </div>
</template>

<script>


export default {
    components:{
    
    },
    data(){
      return{
        msg1:'',
        msg2:''
      }
    }
}
</script>

<style>

</style>