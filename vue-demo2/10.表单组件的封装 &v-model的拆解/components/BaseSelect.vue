<template>
  <div>
    <!-- 有了value相当于你传什么值，以后就渲染什么值 =>数据影响视图 -->
    <!-- 有了@change相当于修改什么值， -->
    <select :value="cityId" @change="handlechange">
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
        // 子组件接收，但此时并没有和数据绑定，但是并不能用v-model进行修改
        // 因为双向绑定会使子组件修改了父组件的值，此时应把v-model进行拆分
        cityId:String
    },
    methods:{
        handlechange(e){
            // 拿到最新的选中的项，不是cityId
            // 需要先找到select => 通过.target的拿到select框之后再.value去取得最新的值
            // console.log(e.target.value);此时拿到了当前框项的id
            this.$emit('changeId',e.target.value)
        }
    }
}
</script>

<style>

</style>