<template>
 <from action="">
    账号:<input type="text" v-model="account">  
    密码:<input type="password" v-model="password">
    <!-- password为私密显示 -->
 </from>
</template>

<script>

export default {
    data(){
      return{
        account:'',
        password:''
      }
    },
    methods:{
      // 一旦调用这个方法就能return当前表单的数据到一个对象当中返回
      // 1、收集表单数据返回一个对象
      getValues(){
        return{
          account:this.account,
          password:this.password
        }
      },

      // 重置我们表单
      // 2、清空表单
      resetValues(){
        this.account ='',
        this.password=''
      }
    }
    
}


</script>


<style>

</style>