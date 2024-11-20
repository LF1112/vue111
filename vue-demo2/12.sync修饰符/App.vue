<template>
  <div id="app">
   <button class="logout"
   @click="isShow= true"
   >退出按钮</button>

   <!--  :visible.sync 等价于 ：wisible +@update：visible -->
   <BaseDialog
   :visible.sync="isShow"
   ></BaseDialog>
  </div>
</template>

<script>
import BaseDialog from './components/BaseDialog.vue';

export default {
    components:{
        BaseDialog,
    },
    data(){
      return{
        isShow:false
      }
    },
}
</script>

<style>

</style>