<template>
  <div class="app">
    <!-- 是否在编辑状态 -->
     <div v-if="isShowEdit">
      <input ref="inp" v-model="editValue" type="text">
      <button>确认</button>
     </div>

     <!-- 默认状态 -->
      <div v-else>
        <span>{{ title }}</span>
        <button @cilck="handlEdit">编辑</button>
      </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      title:'大标题',
      editValue:'',
      isShowEdit: false
    }
  },
  methods:{
    handlEdit(){
      // 1、显示输入框（异步dom更新）
      // 意味着，虽然this.isShowEdit=true，但是dom还没有真正的解析渲染出来，也就意味着，后面获取dom获取失败
      this.isShowEdit=true
      // 2、让输入框获取焦点，要在vue当中获取页面的dom元素，首先应该先获取输入框 =>ref,后获取焦点“.focus”
      // this.$refs.inp.focus()
          //但此时由于异步dom更新，所以dom还没显现出来，还没显现出来所以为undefined


      // 等当前的dom更新完了之后，再去获取焦点，所以：
      // 3、2的改进方法$nextTicK，($nextTicK会等dom更新完，一旦更新完立刻执行函数体)
      // 一旦使用就可以立马获取焦点（获取焦点就比如输入框有输入时显示的那个竖杠）
      $nextTicK(()=>{
        this.$refs.inp.focus()
      })

      /*
         用setTimeout也能等，但是等的时间并不精准，$nextTicK更精准
         setTimeout(()=>{
          this.$refs.inp.focus()
          }，1000)
      */ 
    }
  }
}
</script>

<style>

</style>