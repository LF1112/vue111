<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="handleadd"></TodoHeader>
    <TodoMain :list="list" @del="handledel"></TodoMain>
    <TodoFooter :list="list" @clean="handleclean"></TodoFooter>
  </section>
</template>


<!-- 
  添加功能：
      1、收集表单数据 → v-model
      2、监听事件（2个：回车 + 点击 都要进行添加）
      3、子传父，将任务名称传递给父组件App.vue
      4、父组件进行添加，unshift(自己的数据自己负责)
 -->

<!-- 
  删除功能
        1、监听事件（给×监听点击事件）携带id
        2、子传父，将删除的id传递给父组件App.vue
        3、父组件进行删除，filter 
-->

<!-- 
   底部合计 ：父传子，传list → 渲染
   清空功能：子传父，通知父组件让其进行清空操作
 -->

<!-- 
    持久化存储：但凡我们的数据有变化了都得在本地进行存储
    用watch深度监视list的变化，一旦变化了往本地存储，一进入页面优先读取本地即可
    只和App.vue相关
-->

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';

// 渲染功能
// 1、提供数据 → 提供在公共的父组件 App.vue里
// 2、通过父传子，将数据传递给 TodoMain
// 3、利用 v-for 渲染
export default {
  components:{
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data () {
    // list这个数据优先读取本地的值
    return {
      list:JSON.parse(localStorage.getItem('list'))||[
        {id:1,name:'打篮球'},
        {id:2,name:'看电影'},
        {id:3,name:'光逛街'},
      ]

    }
  },
  methods:{
    handleadd(){
      this.list.unshift({
          id:new Date(),
          name:todoname,
      })
    },
    handledel(id){
      this.list=this.list.filter(item => item.id !==id)
    },
    handleclean(){
      this.list=[]
    }
  },
  watch:{
    list:{
      deep:true,
      handler(newvalue){
        // 将变化了的value存储到本地
        localStorage.setItem('list',JSON.stringify(newvalue))
      }
    }
  }
}
</script>

<style>

</style>
