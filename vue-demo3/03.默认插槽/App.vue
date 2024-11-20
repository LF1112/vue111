<template>
  <div>
    <!-- 2.使用组件时，<MyDialog></MyDialog>标签内部，传入结构代替slot -->
    <MyDialog>
      你确定要删除吗？
    </MyDialog>

    <MyDialog>
      你确定要退出吗？
    </MyDialog>
    <!-- 此时有2个相同的元素出现，此时内容文本是一样的，
     希望组件内部的结构不希望写死而是由使用者去自定义，此时使用插槽-->
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue"
export default {
  data() {
    return {}
  },
  components: {
    MyDialog,
  },
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>