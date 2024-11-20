// 导入插件
import VueRouter from "vue-router";

// 导入组件
import Find from '@/views/Find';
import My from '../views/My.vue';
import Friend from '../views/Friend.vue';
// 但是由于相对路径会根据当前目录的位置变化而变化
// 所以推荐绝对路径,vue当中可以使用一个标识符@来代表绝对路径
// @代表当前的SRC目录,但不能直接写SRC

// 进行插件初始化,但此时要用vue没有vue,所以需要导入vue
Vue.use(VueRouter)

import Vue from "vue";//挪过来之前是因为main.js中早就导过了

// 创建了一个路由对象,而这个理由对象要在main.js中使用,所以还要导出
const router = new VueRouter({
    routes:[
    {path:'/find',component:Find},
    {path:'/my',component:My},
    {path:'/friend',component:Friend},
  ],
  // link自定义高亮类名
  linkActiveClass:'active',//模糊匹配的类名
  linkExactActiveClass:'exact-active',//精准匹配的类名
})

// 一旦导出了router就可以在main.js中使用了
export default router 



