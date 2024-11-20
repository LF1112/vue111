<template>
  <div>
    <MyTable :data="list">
      <!-- slot占位后,这边不需要传多个"删除",因为有v-for -->
       <!-- <button>删除</button>  -->
       <!-- 但是此时没有实现删除查看功能,所以要注册点击事件 -->
        <!-- 而此时要拿到id,但是不能写item.id,因为其为组件内部的,不能直接跨组件拿到 -->
       <!-- <button @click="del()">
        删除
        </button>  所以如下-->

        <!-- 3.通过templata写=进行接收 接收一整个对象,可任起一个变量来接收(obj) -->
         <template #default="obj">
            <button @click="del(obj.row.id)">
                  删除
             </button> 
         </template>
    </MyTable>

    <MyTable :data="list2">
      <template #default="{ row }">
            <button @click="show(row)">
                  查看
             </button> 
         </template>
    </MyTable>
  </div>
</template>

<script>
import { del } from 'vue';
import MyTable from './components/MyTable.vue'
export default {
  data () {
    return {
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ]
    }
  },
  methods:{
    del(id){
      this.list =this.list.filter(item => item.id !== id)
    },
    show(row){
      // console.log(row);
      // 查看用alert() 弹窗
      alert(`姓名:${row.name},年纪:${row.age}`)      
    }
  },
  components: {
    MyTable
  }
}
</script>
