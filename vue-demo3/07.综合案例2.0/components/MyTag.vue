<template>
  <div class="my-tag">
     <input 
      v-if="isEdit"
      v-focus
      
      ref="inp"
       class="input"
       type="text"
       placeholder="输入标签"
        :value="value"
       @blur="isEdit = false"
       @keyup.enter="handEnter"
     />
     <!-- 每当我的输入框显示的时候，都希望立刻获取焦点就直接加一个v-focus -->
      <!-- v-model在子组件中不能和父组件传过来的东西进行绑定 子组件不能直接修改父组件传过来的数据，得子→父传过去，让父组件改-->
     <!-- 标签组件 -->

     <div 
     v-else 
     @dblclick="handCilck"
     class="text">
      {{ value }}
     </div>

     <!-- 上面的input和div是要互斥的 ,且双击茶具要显示-->
    </div>
</template>

<script>
export default {
  props:{
    value:String
  
  },
  data(){
    return{
      isEdit:ture
    }
  },
  methods:{
    handCilck(){
      // 双击后，切换到显示状态
      this.isEdit=ture
      // 立刻获取焦点
      // this.$refs.inp.focus()    这样无法获取焦点，因为：vue是异步dom更新

      // 所以等dom更新完了，再获取焦点
      this.$nextTick(() => {
          // 立刻获取焦点
          this.$refs.inp.focus()
      })
      },

      // 绑定回车事件时，在形参e中可以拿到事件对象E(就是输入框中的值)
      handEnter(e){
        // 如果提交为空做一个判断
        if(e.target.value.trim() =='') return alert('输入内容不能为空')


        // 如果回车的情况就需要子→父，将回车时输入框的内容提交给父组件更新
        // 父组件用的是v-model，所以触发事件需要触发input事件
        
        //console.log(e.target);//e.target是触发事件的事件源（<!-- <inputref="inp" type="text" placeholder="输入标签"  class="input">）
        // 所以要拿输入框的值直接.value即可

        // console.log(e.target.value)，所以拿到值直接往上传即可
        this.$emit('input',e.target.value)
        //然后就会传递给老爹，它由于用的v-model监听到了input事件就会立刻传递给temptext

        // 提交完成要关闭输入状态
        this.isEdit=false
      }
  }
}
</script>

<style lang="less" scoped>
.my-tag {
    cursor: pointer;
    .input {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 100px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
      &::placeholder {
        color: #666;
      }
    }
  }
</style>