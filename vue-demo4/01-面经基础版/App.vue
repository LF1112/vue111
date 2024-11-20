<template>
  <div class="h5-wrapper">
    <!-- ① .<keep-alive :include="['LayoutPage']"> -->
    <keep-alive :include="keepArr">
      <router-view></router-view>
    </keep-alive>
    <!-- 
        在这边可以缓存的组件：一级路由
        包裹了keep-alive 一级路由匹配的组件都会被缓存
        Layout  Detail组件，都会被 缓存
    -->
    <!--
        但是此时会有一个问题：点击一个面经后Layout Detail都被缓存了
        返回后点击一个新的面经，由于上面Detail被缓存了，所以点击新的面经后出现的还是上一个面经
        此时说明了，有些组件是需要被缓存的，有些不需要

        需求：只希望Layout被缓存，include配置
        include="组件名数组" /组件名数组是该组件内export处的name

        ②如果我们需要缓存的组件较多，可以在export处写一个数据data
     -->
      
     <!--
          被包裹的组件（LayoutPage）会多2个生命周期钩子
          -actived(激活时，组件被看到时触发)
          -deactived（失活时，离开页面组件看不见时触发）

          如果一个组件一旦被缓存了，就不涉及一个组件的创建和销毁了
          也就是说，一旦一个组件被缓存了，在created,mounted,destroyed中的内容就不会执行

          万一
      -->
  </div>
</template>

<script>
export default {
  name: "h5-wrapper",
  data(){
    return {
      // 缓存组件名的数组
      keepArr:['LayoutPage']
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
<style lang="less" scoped>
.h5-wrapper {
  .content {
    margin-bottom: 51px;
  }
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    a {
      flex: 1;
      text-decoration: none;
      font-size: 14px;
      color: #333;
      -webkit-tap-highlight-color: transparent;
      &.router-link-active {
        color: #fa0;
      }
    }
  }
}
</style>