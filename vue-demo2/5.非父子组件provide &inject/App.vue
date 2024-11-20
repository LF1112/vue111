<template>
  <div id="app">
    <span>我是App组件</span>
    <button @click="change">修改数据</button>
    <SonA></SonA>
    <SonB></SonB>
  </div>
</template>

<script>
import SonA from "./components/SonA.vue";
import SonB from"./components/SonB.vue"

export default {
  provide(){
    return {
      // 共享的数据
      color:this.color,
      userInfo :this.userInfo
    }
  },
components:{
  SonA,
  SonB,
},
  data(){
    return {
      color:'pink',  //简单类型 → 非响应式
      userInfo:{     //复杂类型 → 响应式
        name:'zs',
        age:18
      }
    }
  },
  methods:{
    change(){
      // this.color ='green'  此时用Vue观看则改变，但页面没变化
      this.userInfo.name ='ls'   //推荐
      // 此时视图同步，所以共享时，包成一个对象，以复杂类型形式的方式往下面共享
    }
  }
}
</script>

<style>

</style>