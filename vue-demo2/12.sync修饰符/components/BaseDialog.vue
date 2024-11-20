<template>
  <div v-show="visible" class="base-dialog-mask">
    <div class="base-dialog">
        <div class="title">
            <h3>温馨提示：</h3>
            <button class="close" @click="handlechange">X</button>
        </div>
        <div class="content">
            <p>你确定要退出本系统吗？</p>
        </div>
        <div class="footer">
            <button>确认</button>
            <button>取消</button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    props :{
        visible:Boolean
    },
    methods:{
        handlechange(){
            this.$emit('update:visible',false)
        }
    }
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