<template>
  <div>
    <MyDialog></MyDialog>

    <MyDialog>
      你确认要删除吗?
    </MyDialog>
    <!-- 此时默认内容会被替换 -->
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>