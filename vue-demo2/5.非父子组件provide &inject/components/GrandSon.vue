<template>
  <div class="grandSon">
    我是GrandSon组件
    {{ color }} - {{ userInfo.name  }} -{{ userInfo.age }}
  </div>
</template>

<script>
export default {
    // 直接接收，接受完了直接渲染
    inject:['color','userInfo']
}
</script>


<style>
.grandSon{
    width:200px;
    height: 80px;
    padding: 10px;
    border:3px solid#000;

}
</style>