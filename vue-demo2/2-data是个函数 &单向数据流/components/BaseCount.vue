<template>
  <div class="base-count">
    <!--data是一个函数 
    <button @click="count--">-</button>
    <span>{{count}}</span>
    <button @click="count++">+</button> -->

    <!-- prop &data、单向数据流 -->
    <button @click="handleSub">-</button>
    <span>{{count}}</span>
    <button @click="handleAdd">+</button> 

  </div>
</template>

<script>
export default {
/*****************data是一个函数**************************************** */
  // 一个组件的数据需要是个函数，return 提供它所对应是数据项

  // data(){
  // data必须是一个函数 → 保护每个组件实例，维护独立的一个数据对象
  //   return{
  //     count:999 
  //   }
  // }

/*******************prop &data、单向数据流******************************* */
// 1.自己的数据随便改（谁的数据谁负责）  
// 2.prop传过来的数据（外部的数据），不能改

// 以后的prop写成对象
      prop:{
        count:Number
      },

/*
    但此时，3行和5行是在修改prop传过来的对象
    此时需要修改@click="handleAdd" &"handleSub",然后提供methods
*/
      methods:{
        handleAdd () {
          //不能直接改，但是可以通知给父组件，让它改
          // 子传父
          this.$emit('changeCount',this.count+1)//不是++，++相当于修改它了
        },
        handleSub(){
          this.$emit('changeCount',this.count-1)
        }
      }
}
</script>

<style scoped> 

</style>