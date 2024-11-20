import Vue from 'vue'
import App from './App.vue'

// 导入
import router from "./router/index";
// 但此时系统从./router/index出发router目录的views目录当前的Find的目录没找到
// 找不到和index.js平级的views目录
// 所以此时导入Find时为../,回到上一级,在index.js中



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
  // 这里用了个router变量但是还没定义所以会报错，需要定义
  // 此时定义在index.js中，将来在index.js当中创建完了要做一个路由对象的导出
  // 导出成功了就能在main.js当中使用了
}).$mount('#app')
