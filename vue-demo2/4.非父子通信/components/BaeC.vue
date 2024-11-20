<template>
  <div class="baseC">
    我是C组件(接收方)
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import Bus from'../utils/EventBus'
export default {
    created(){
        // 2.在C组件（接收方）中，进行监听Bus的事件（订阅消息）
        Bus.$on('sendMsg',(msg)=>{
            // console.log(msg);
            this.msg=msg
        })
    },
    data() {
            return {
                msg:''
            }

    },
}


</script>


<style>
.baseC{
    width: 200px;
    height: 150px;
    padding: 10px;
    margin-top: 10px;
    border: 3px solid#000;
    border-radius: 5px;
    font-size: 20px;
}
</style>