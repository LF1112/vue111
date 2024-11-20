<template>
  <div>
    <h1>自定义指令</h1>
    <!--获取焦点
      通过设置ref 方便找到
      ①  <input ref="inp"  type="text"> -->
      <input v-focus ref="inp" type="text">
      <!-- 使用指令直接  v-指令名 ，并且一旦绑定上了，这个指令与当前的input标签元素就关联起来了-->
  </div>
</template>

<script>
export default {
  // ① mounted(){
  //   this.$refs.inp.focus()
  // } 然后通过$refs，后获取焦点

  // 定义指令
  // 1、全局 ——>跳转main.js


  // 2、局部 ——>只能在当前的组件范围内使用
  directives:{
        // 指令名：指令的配置项
        "focus":{
          inserted(el){
            //可以对el标签，扩展额外功能
            el.focus()
          }
        }
      }

}
</script>

<style>

</style>