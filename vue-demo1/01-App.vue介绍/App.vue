<template>
  <div class="App">
   <div class="box" @click="fn">

   </div>
  </div>
</template>

<script>
// 导出的是当前组件的配置项
// 里面可以提供data(特殊) methods conputed watch 生命周期八大钩子
export default {
      methods:{
        fn(){
          alert('你好')
        }
      },
      created(){
        console.log('我是created')
      }
  }
  
</script>


<!-- 默认为css，所以写法如下 -->
<style>
.App{
  width: 400px;
  height: 400px;
  background-color: pink;
}
.App.box{
  width: 100px;
  height: 100px;
  background-color: skyblue;
}
</style>

<!-- 
  但还有这种less嵌套语法，但会报错，没做设置
  
  如果要让style支持less，则需要：
  1.给style加上   lang="less"
  2.安装依赖包    less less-loader
     yarn add less less-loader -D（开发依赖，只在开发上用）
  
  
  默认情况不支持less
<style lang="less">
    .App{
      width: 400px;
      height: 400px;
      background-color: pink;
    
      .box{
        width: 100px;
       height: 100px;
        background-color: skyblue;
      }
    }

</style>
 -->
