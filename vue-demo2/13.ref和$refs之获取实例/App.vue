<template>
  <div id="app">
    <div class="base-chart-box" style="width:100px;height: 100px;">
      我是一个捣乱盒子
    </div>
   <BaseChart></BaseChart>
  </div>
</template>

<script>
import BaseChart from './components/BaseChart.vue';

export default {
    components:{
        BaseChart
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