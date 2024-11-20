// 此文件的核心作用：导入APP.vue，基于APP.vue创建结构渲染index.html


import Vue from 'vue'
import App from './App.vue'

// 编写导入的代码，往代码的顶部编写（规范）
import HmButton from'./components/HmButton.vue'

Vue.config.productionTip = false

// 进行全局注册  → 在所有的组件范围内都能直接使用
// Vue.component(组件名，组件对象)
Vue.component(HmButton,HmButton)

// vue实例化，提供render方法  → 作用：基于APP.vue创建结构渲染index.html
new Vue({
  // render: h => h(App),是简写
   render:(createElement) =>{
    // 创建元素结构，基于APP来创建元素结构
    return createElement(App)
   }
}).$mount('#app')
