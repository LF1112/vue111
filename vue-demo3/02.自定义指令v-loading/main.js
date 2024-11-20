import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// 1、全局注册指令
//  Vue.directive('指令名'，{配置项(配置项当中需要写与指令相关的钩子)})

// Vue.directive('focus',{
  //inserted 会在 指令所在的元素，被添加到页面当中的时候 自动调用，
  // 与mounted类似，mounted是等dom渲染完
// "inserted"(el){
  //el就是指令所绑定的元素，可以对el标签，扩展额外功能
  // el.focus()
// }
// })
// 定义了一个全局指令,并且在inserted当中打印了下,但是并无效果
// 因为只是定义指令，并没有使用，所以得到页面对应位置使用  ——>跳转App.vue



// 2、局部注册指令，只用在使用的组件处使用，所以不用到该页面使用

new Vue({
  render: h => h(App),
}).$mount('#app')
