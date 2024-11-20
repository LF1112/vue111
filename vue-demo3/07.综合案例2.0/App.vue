<template>
  <div class="table-case">
    <!-- 通过父→子传递数据goods -->
    <MyTable :data="goods">
      <template #head>
          <th>编号</th>
          <th>名称</th>
          <th>图片</th>
          <th width="100px">标签</th>
      </template>

      <template #body="{item,index}">
        <!-- 此时用到的数据index item等都是组件内部的数据 -->
         <!-- 
              在父组件当中想要使用封装的组件内部的数据 
              我们可以利用作用域插槽的方式，将数据绑定在插槽上
              一旦绑定，在前面使用数据时就能接收了
              作用域插槽：以添加属性的方式传值
          -->
        <td>{{index + 1}} </td>
          <td>{{item.name}}</td>
          <td>
            <img 
            :src="item.picture" >
          </td>
          <td>
            <div class="my-tag">
              <!-- 标签组件 -->
               <MyTag v-model="item.tag"></MyTag>
            </div>
          </td>
      </template>
    </MyTable>
  </div>
</template>

<!-- 
    my-table表格组件封装
      1.数据不能写死，动态传递表格渲染的数据 props
      2.结构不能写死 - 多处结构自定义 【具名插槽】
          （1）表头支持自定义
          （2）主体支持自定义
 -->
<script>



  import MyTag from "./components/MyTag.vue";
  import MyTable from "./components/MyTable.vue";
export default {
  name: 'TableCase',
  components: {
    MyTag,
    MyTable
  },
  data() {
    return {
      // 测试组件功能的临时数据
      tempText:'茶壶',
      // 在标签组件中写上 v-model 与其进行绑定

      tempText2:'男靴',

      // 已经有了goods数据，要在里面使用时用父→子往里传递
      goods: [
        {
          id: 101,
          picture:
            'https://yanxuan-item.nosdn.127.net/f8c37ffa41ab1eb84bff499e1f6acfc7.jpg',
          name: '梨皮朱泥三绝清代小品壶经典款紫砂壶',
          tag: '茶具',
        },
        {
          id: 102,
          picture:
            'https://yanxuan-item.nosdn.127.net/221317c85274a188174352474b859d7b.jpg',
          name: '全防水HABU旋钮牛皮户外徒步鞋山宁泰抗菌',
          tag: '男鞋',
        },
        {
          id: 103,
          picture:
            'https://yanxuan-item.nosdn.127.net/cd4b840751ef4f7505c85004f0bebcb5.png',
          name: '毛茸茸小熊出没，儿童羊羔绒背心73-90cm',
          tag: '儿童服饰',
        },
        {
          id: 104,
          picture:
            'https://yanxuan-item.nosdn.127.net/56eb25a38d7a630e76a608a9360eec6b.jpg',
          name: '基础百搭，儿童套头针织毛衣1-9岁',
          tag: '儿童服饰',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.table-case {
  width: 1000px;
  margin: 50px auto;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }
  
}
</style>