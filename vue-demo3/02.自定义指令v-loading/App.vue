<template>
  <div class="main">
    <div class="box" v-loading="isloading">    <!--写上loading，蒙层效果出现反之无，所以本质就是添加或者移除类，
      关于类名的添加或者移除结合指令进行封装，自定义指令就可以起名为v-loading，因为盒子将来会有不同的状态所以可以给指令赋值
      但是赋值后蒙层并不会显现，因为加了指令后并没有给指令定义任何逻辑，所以只要定义下并添加逻辑即可-->
      
      <ul>
        <li v-for="item in list" :key="item.id" class="news">
          <div class="left">
            <div class="title">{{ item.title }}</div>
            <div class="info">
              <span>{{ item.source }}</span>
              <span>{{ item.time }}</span>
            </div>
          </div>

          <div class="right">
            <img :src="item.img" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="box2"></div>
  </div>
</template>

<script>
// 安装axios =>  yarn add axios
import axios from 'axios'

// 接口地址：http://hmajax.itheima.net/api/news
// 请求方式：get
export default {
  data () {
    return {
      list: [],
      isloading:true,
    }
  },
  async created () {
    // 1. 发送请求获取数据
    const res = await axios.get('http://hmajax.itheima.net/api/news')
    
    setTimeout(() => {
      // 2. 更新到 list 中
      this.list = res.data.data

      // 2、当我的加载画面出来后，蒙层移除即可
      this.isloading = false
      //但是此时蒙层可能发现细微变化，但是不会移除，是因为： inserted(el,bindings){}只是在控制初始状态
      // 我们的指令默认不会数据变化视图自动更新的，如果我们希望指令绑定的值变化视图自动更新的话需要我们自己提供，在updata中设置
    }, 2000)
  },
  directives:{
    loading:{
      inserted(el,bindings){
        // 1、一进页面默认找到el然后el就是我们所在单元的元素，这个元素要添加上我们的类
        // el.classList.add('loading')//但是不太严谨，因为data处写ture要于isloading的初始值关联在一起 
        // 所以根据
        bindings.value ? el.classList.add('loading') : el.classList.remove('loading')
        //bindings.value等于isloading的初始值，看这个值是不是ture是就说明要 保持我们加载中的状态


      },
      updata(el,bindings){
        bindings.value ? el.classList.add('loading') : el.classList.remove('loading')
      },
      // 而且由于我们封装成了指令，意味着可以复用，如box2
    }
  }

}
</script>

<style>
/* 伪类 - 蒙层效果 */
.loading:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff url('./loading.gif') no-repeat center;
  /* no-repeat 不平铺 */
}

/* .box2 {
  width: 400px;
  height: 400px;
  border: 2px solid #000;
  position: relative;
} */

.box {
  width: 800px;
  min-height: 500px;
  border: 3px solid orange;
  border-radius: 5px;
  position: relative;
}
.news {
  display: flex;
  height: 120px;
  width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  cursor: pointer;
}
.news .left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}
.news .left .title {
  font-size: 20px;
}
.news .left .info {
  color: #999999;
}
.news .left .info span {
  margin-right: 20px;
}
.news .right {
  width: 160px;
  height: 120px;
}
.news .right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>