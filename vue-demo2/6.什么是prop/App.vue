<template>
  <div id="app">
    <UserInfo 
    :username="username"
    :age="age"
    :isSingle="isSingle"
    :car="car"
    :hobby="hobby"
    ></UserInfo>
  </div>
</template>

<script>
import UserInfo from'./components/UserInfo.vue'
export default {
components:{
  UserInfo,
},
  data(){
    return {
      Username:'小帅',
      age:28,
      isSingle:true,
      car:{
        brand:'宝马'
      },
      hobby:['篮球','足球','羽毛球']
    }
  }
}
</script>

<style>

</style>