import Vue from 'vue'
import App from './App.vue'

// 路由的使用步骤 5+2
// 1.下载v3.6.5
// Ctrl+`打开终端输入yarn add vue-router@3.6.5

// 2.引入
import VueRouter from "vue-router";

// 3.安装注册 vue.use（use的是vue相关的插件）
Vue.use(VueRouter)//创建之后内部会进行VueRouter插件的初始化

// 4.创建路由对象
// const router = new VueRouter()//可以理解为创建了一个空的路由对象，但是没有建立关联

// 
const router = new VueRouter({
  // routes 路由规则们，这也证明了为数组包对象，因为里面有很多条规则
  // route 是一条路由规则  且必须为{path：路径，component：切换的组件}
  routes:[
    {path:'/find',component:Find},
    {path:'/my',component:My},
    {path:'/friend',component:Friend},
  ]
})

// 5.注入到new vue中，建立关联
// 将创建的router往new vue中去配，建立关联


// 2个核心步骤
// 1.建组件（往views里建），配规则（配规则是在第4部的new VueRouter()中定）
// 然后将创建好的组件引进来
import Find from './views/Find';//此时会报错，因为起名不能只有一个单词，此时在对应组件起名即可
import My from './views/My.vue';
import Friend from './views/Friend.vue';
// 2.准备导航链接（为了切路径），并且配置路由出口（匹配的组件展示的位置）
//  去到App.vue，将路径导入


// 由于有三个需要切换的功能说明需要建三个组件
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
  // router：router，完整写法，且只有创建路由的时候使用router时，才能简写
}).$mount('#app')
