<!-- <template>
  <div class="App">

  在之前就是
  <div class="hm-header"></div>
  <div class="hm-main"></div>
  <div class="hm-footer"></div>
  但是现在是基于组件开发，而是封装成组件
  如下所示

  </div>
  
</template> -->

<template>
  <!-- 此时为局部注册 准备好后要导入注册-->
  <div class="App">
    <!-- 头部组件 -->
    <Hmheader></Hmheader>
    <!-- 主体组件 -->
    <HmMain></HmMain>
    <!-- 底部组件 -->
    <HmFooter></HmFooter>

   <!-- 
    如果HmFooter +tab 出不来 → 需要配置 vscode 
    设置中搜索 trigger on tab
   -->

  </div>
</template>

<script>
// 导入
// 但是声明了HmHeader变量但是没有使用它
import Hmheader from './components/HmHeader.vue'
import HmMain from './components/HmMain.vue'
import HmFooter from './components/HmFooter.vue'
// import HmButton from './components/HmButton.vue';

export default {
// 此时需要写一个components配置项
components:{
// 在对象里面进行当前组件的注册
// '组件名'：组件对象
  Hmheader:Hmheader,
  // 此时就可以将Hmheader当成组件在template使用

  // 可简写为
  HmMain,
  HmFooter,


}
}
</script>

<style>
.App{
  width: 600px;
  height: 600px;
  background-color: #87ceeb;
  /* 居中 */
  margin: 0 auto;
  /* 内边距 */
  padding: 20px;

}
</style>