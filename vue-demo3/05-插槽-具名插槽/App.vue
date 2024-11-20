<template>
  <div>
    <MyDialog>
      <!-- 使用具名插槽时，如没有分配则不会显示 -->
       <!-- 所以此时使用template标签包裹需要分发的结构，包成一个整体 -->
     <template #head>
      <div>我的大标题</div>
    </template>
     
    <template #content>
      <div>我是内容</div>
    </template>
    
    <template #footer>
      <button>确认</button>
      <button>取消</button>
    </template>
     
    </MyDialog>
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