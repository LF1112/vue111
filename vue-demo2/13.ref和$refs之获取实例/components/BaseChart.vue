<template>
  <div ref="mychart" class="base-chart-box" >
   
  </div>
</template>

<script>
// 装包：yarn add echarts

export default {
    props :{
    },
    methods:{
      
    },
    mounted(){
        // 基于准备好的dom，初始化echarts实例
        // const myChart = echarts.init(document.querySelector('.base-chart-box'))
            // querySelector 查找范围 → 整个页面 ,所以能成功是因为所需盒子恰巧就是第一个
            // 但如果这个组件的前面有个同名盒子， 此时就找的是错误的盒子
            // 为了避免这种情况，就可以使用ref和$refs，此时就需要在div处添加ref属性
            // 再在原来document.querySelector('.base-chart-box')删除,进行修改
            const myChart = echarts.init(this.$refs.mychart)

        // 指定图表的配置项和数据
        const option ={

        }

        // 使用刚指定的配置项和数据显示图表，
        myChart.setOption(option)
    },
    
    
}


</script>


<style>
.base-dialog-mask{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
}
.base-dialog{

}
</style>