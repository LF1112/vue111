<template>
  <div>我是BaseOne</div>
</template>

<script>
export default {

}
</script>


<style scoped>
/*
  1、默认是style样式，会作用于全局 → 全局样式
  2、若是为了改变默认则将style上添加scoped属性
  3、加上我们scoped属性的style样式，只会作用于当前组件 → 局部样式


  平时加上scoped 
  原因：  组件应该有着自己独立的样式，推荐加上

  ---------------------------------------------------------------------
  scoped原理：
    1、给当前组件模板的所有元素，都会被添加上一个自定义属性
      data-v-hash值，且统一组件的hash值是一样的
      通过hash值区分不同组件
    2、css选择器后面，被自动处理，添加上属性选择器
      div[data-v-hash值]

    
    最终效果：必须是当前组件的元素，才会有这个自定义属性，才会被这个样式作用到
*/

.div{
  /* 边框 */
  border:3px solid blue;

  /*  */
  margin: 30px;
}
</style>