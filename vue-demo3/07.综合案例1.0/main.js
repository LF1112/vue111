import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 封装全局指令 focus
Vue.directive(`focus`,{
  // 指令所在的dom元素，被插入页面中时触发
    // 获取焦点的功能用el就行
    // 这样其他局部就行使用
  inserted(el,binding){
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
