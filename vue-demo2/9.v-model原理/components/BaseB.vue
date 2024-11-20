<template>
  <div class="baseB">
    我是B组件(发布方)
    <button @click="clickSend">发布消息</button>
  </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
    methods:{
        clickSend(){
            // 3.B组件（发送方） 触发事件的方式传递参数（发布消息）
            Bus.$emit('sendMsg','今日晴天')
        }
    }

}
</script>


<style>
.baseB{
    width: 200px;
    height: 150px;
    padding: 10px;
    margin-top: 10px;
    border: 3px solid#000;
    border-radius: 5px;
    font-size: 20px;
}
</style>