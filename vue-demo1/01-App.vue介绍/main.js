// 此文件的核心作用：导入APP.vue，基于APP.vue创建结构渲染index.html

// 1.导入vue核心包
import Vue from 'vue'

// 2.导入APP.vue 根组件
import App from './App.vue'

// 提示：当前处于什么环境（生产环境/开发环境），true为开发环境
Vue.config.productionTip = false


// 3.vue实例化，提供render方法  → 作用：基于APP.vue创建结构渲染index.html
new Vue({
  // el:'#app',作用： ===$mount('选择器')作用一致，用于指定vue所管理容器
  // render: h => h(App),是简写
  
  //完整写法：    createElement创建元素的意思
   render:(createElement) =>{
    // 创建元素结构，基于APP来创建元素结构
    // createElement(App)但此时没有返回，得不到创建完的结构，所以还需将创建完的结构return
    return createElement(App)
    // 这个结构用于后面渲染index
   }
}).$mount('#app')
