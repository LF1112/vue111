import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from '01-面经基础版/views/Layout.vue';
import ArticleDetail from '01-面经基础版/views/ArticleDetail.vue';
import Article from "01-面经基础版/views/Article.vue";
import Collect from '01-面经基础版/views/Collect.vue';
import Like from '01-面经基础版/views/Like.vue';
import User from '01-面经基础版/views/User.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      // 在搜索栏中回到/时只能回到Layout不能匹配到其他二级子路由
      // 此时上面一篇空白，希望看到面经-->article,所以此时只需要访问的/时重定向到子路由中
      // redirect
      path:'/',
      component:Layout,
      redirect:'/article',
      // 此时除了首页有个重定向需要处理外，点击详情后返回也没用
      // 返回是在详情，是在Detail中的，是面经详情左边的back
      // $router就是跳转的意思了，所以给其创建一个@cilck=$router.back（），即可返回上一级

      // 通过children 配置项，可以配置嵌套子路由
      // 1.在children配置项中，配规则
      // 2.准备二级路由出口
      children:[
        {
          path:'/article',
          component:Article,
        },
        {
          path:'/collect',
          component:Collect,
        },
        {
          path:'/like',
          component:Like,
        },
        {
          path:'/user',
          component:User,
        }
    ]
    },
    {
      path:'/detail/:id',//detail=>详情
      component:ArticleDetail
    },
    {path:'',},
    {path:'',},
    {path:'',},
    {path:'',},
    {path:'',},
    {path:'',},
  ]
})

export default router