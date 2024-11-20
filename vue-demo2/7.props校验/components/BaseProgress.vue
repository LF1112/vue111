<template>
  <div class="base-progress">
    <div
        class="inner"
        :style="{ width:w+'%'}"
    ></div>
  </div>
</template>

<script>
export default {
/***************************类型校验********************************************* */
    // props:['w']
    // 当输入为非数值时，不会报错，此时若要代码对错误输入值进行报错需要

    // 将原先props数值的写法改为对象的写法
    // 1.基础写法(类型校验)

//    props:{
//    w:Number    //Number\String\Boolean\Array\Object\Function
//    }


    /* props:{
          校验的属性名：类型
    }
    */


/*****************非空、自定义校验/默认值********************** */
// 2.完整写法(类型，非空，默认，自定义)
/*将类型校验的类型写成对象 */
/*
    props：{
      校验的属性名:{
        type:类型,   //Number/String/Boolean
        required:true, //是否必填
        default:默认值, //默认值
        validator(value){
          //自定义校验逻辑
          return 是否通过校验
        }
      }
    }
*/
    props:{
      w:{
        type:Number,
        required:true,
        default:0,
        validator(value){
          // 根据形参，该函数的形参可以接收父组件传递过来的props的传值的
          if(value>=0 && value<=100){
            return true
          }else{
            //在return false的时候会补充一个console.error的提示
            console.error('传入的prop w,必须是0-100 的数字');
            return false
          }
          // return true/false    前者相当于通过校验，反之没有通过校验

        }
        
      }
    }
}

</script>


<style>
.base-progress{
    height: 26px;
    width: 400px;
    border-radius: 15px;
    background-color: #272425;
    border:3px solid #272425;
    box-sizing: border-box;
    margin-bottom: 30px;
}
</style>