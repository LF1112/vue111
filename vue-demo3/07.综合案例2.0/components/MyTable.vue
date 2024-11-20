<template>
  <table class="my-table">
      <thead>
        <tr>
          <slot name="head"></slot>
        </tr>
      </thead>
      <tbody>
        <!-- 自定义主体部分 -->
         <!-- 
              在父组件当中想要使用封装的组件内部的数据 
              我们可以利用作用域插槽的方式，将数据绑定在插槽上
              一旦绑定，在前面使用数据时就能接收了
              作用域插槽：以添加属性的方式传值
          -->
        <tr v-for="(item, index ) in data" :key="item.id">
            <slot name="body" :item="item" :index="index"></slot>
        </tr>
        <!-- 以下就将当前表格动态渲染，且不是在组件内部写死的而是由父组件动态传递 -->
         <!-- 与下面为一个对照组 -->
        <!-- <tr v-for="(item, index ) in data" :key="item.id">
          <td>{{index + 1}} </td>
          <td>{{item.name}}</td>
          <td>
            <img 
            :src="item.picture" >
          </td>
          <td>
            <div class="my-tag">
              标签组件
               <MyTag v-model="tempText"></MyTag>

              <div class="text">
                茶具
              </div>
            </div>
          </td>
        </tr> -->
        <!-- 对照组
            <tr>
          <td>1</td>
          <td>梨皮朱泥三绝清代小品壶经典款紫砂壶</td>
          <td>
            <img src="https://yanxuan-item.nosdn.127.net/f8c37ffa41ab1eb84bff499e1f6acfc7.jpg" />
          </td>
          <td>
            <div class="my-tag">

              标签组件
               <MyTag v-model="tempText"></MyTag>
               

              <div class="text">
                茶具
              </div>
            </div>
          </td>
        </tr> 
        -->
      </tbody>
    </table>
</template>

<script>
export default {
// 父→子用props接收,且写属性名data+类型（数组，整型..）
// 传过来之后就可以利用数据进行动态渲染
props:{
    // data:Array
    data:{
        // 为数组类型
        type:Array,
        // 不能为空
        required:true

    }
}
}
</script>

<style lang="less" scoped>
.my-table {
    width: 100%;
    border-spacing: 0;
    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      vertical-align: middle;
    }
    th {
      background: #f5f5f5;
      border-bottom: 2px solid #069;
    }
    td {
      border-bottom: 1px dashed #ccc;
    }
    td,
    th {
      text-align: center;
      padding: 10px;
      transition: all 0.5s;
      &.red {
        color: red;
      }
    }
    .none {
      height: 100px;
      line-height: 100px;
      color: #999;
    }
  }
</style>