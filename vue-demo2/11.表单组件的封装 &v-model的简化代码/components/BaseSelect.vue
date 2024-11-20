<template>
  <div>
    <!-- 此时也得用value进行绑定 -->
    <select :value="value" @change="handlechange">
        <option value="101">北京</option>
        <option value="102">上海</option>
        <option value="103">武汉</option>
        <option value="104">深圳</option>
        <option value="105">广州</option>
    </select>
  </div>
</template>

<script>
export default {
    props:{
        //子组件中：prop通过value接收，事件触发input
        value:String
    },
    methods:{
        handlechange(e){
            // 子传父触发，应该触发固定的input事件
            this.$emit('input',e.target.value)
        }
    }
}
</script>

<style>

</style>