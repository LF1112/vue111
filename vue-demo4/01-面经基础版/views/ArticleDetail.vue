<template>
  <div class="article-detail-page" v-if="article.id">
    <nav class="nav"><span @click="$router.back()" class="back">&lt;</span> 面经详情</nav>
    <header class="header">
      <h1>{{article.stem}}</h1>
      <p>{{article.createdAt}} | {{article.views}} 浏览量 | {{article.likeCount}} 点赞数</p>
      <p>
        <img
          :src="article.creatorAvatar"
          alt=""
        />
        <span>{{article.creatorName}}</span>
      </p>
    </header>
    <main class="body">
      {{ article.content }}
    </main>
  </div>
</template>

<!--
  在切换不同面经时，会有短暂的空白
  原因：
      发请求是需要时间的，空白的效果不好，所以此时可以给当前的渲染加上一个判断
      v-if="article.id",等请求的数值回来之后，再进行渲染，即有文章的时候再进行渲染
 -->

<script>
import axios from 'axios';

// 请求地址: https://mock.boxuegu.com/mock/3083/articles/:id /且此时：id不能写死
// 请求方式: get
export default {
  name: "ArticleDetailPage",

  // 需要拿到其中的result
  data() {
    return {
      // 得到的结果为数组，所以使用article储存,将其作为一个容器，
      // 在created中将所需要的数值赋值给article
      article:{
      }
    }
  },
   async created(){
    // this.$router.query.id//传递的id，且为查询参数传参
    this.$router.params.id//动态路由传参传递的id

    // 传递了id，结合id去发个请求拿到数据之后页面当中去做个渲染

    // 接口动态渲染
    const id =this.$router.params.id //地址栏传过来是通过动态路由传参，所以使用的是params
    // const res= await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${id}`)
    // console.log(res);//此时能成功拿到所需要的数据，所以从中就可以得到data，其中的result就是我们需要的结果
    const {data}= await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${id}`)//res解构出的data，从data中拿到result
    this.article = data.result//此时就能拿到我们所需要渲染的数值，就可以将上面的死值换成{{}}的形式
  }
}
</script>

<style lang="less" scoped>
.article-detail-page {
  .nav {
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 44px;
    text-align: center;
    .back {
      font-size: 18px;
      color: #666;
      position: absolute;
      left: 10px;
      top: 0;
      transform: scale(1, 1.5);
    }
  }
  .header {
    padding: 0 15px;
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .body {
    padding: 0 15px;
  }
}
</style>