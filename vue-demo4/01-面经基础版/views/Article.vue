<template>
  <div class="article-page">
    <div
      v-for="item in articies"
      :key="item.id"
      @click="$router.push(`/detail/${item.id}`)"
      class="article-item"
      >
      <!-- 查询参数传参：@cilck="$router.push(`/detail?id=${item.id}`)"：要获取地址栏的传参去对应页面——详情页获取 -->
       <!-- 动态路由传参：@click="$router.push(`/detail/${item.id}`)" -->
      <div class="head">
        <img :src="item.creatorAvatar" alt="" />
        <div class="con">
          <p class="title">{{item.stem}}</p>
          <p class="other">{{item.creatorName}}| {{item.creatorAt}}</p>
        </div>
      </div>
      <div class="body">
         {{ item.content }}
      </div>
      <div class="foot">{{item.likeCount}} | {{item.views}}</div>
    </div>
  </div>
</template>

<script>
// 1.安装axios
// 2.看对应的接口文档（确认请求方式，请求地址，请求参数）
      // 请求地址: https://mock.boxuegu.com/mock/3083/articles
      // 请求方式: get
// 3.created中发送请求，获取数据，存起来
      // 使用await需要使用async
      // 使用axios上面要进行导入
      import axios from "axios";
      
// 4.页面动态渲染


export default {
  name: 'ArticlePage',
  
  //将返回的数据渲染出来就得把数据存一存，data提供数据所以用data函数
  data () {
    return {
      // 将我们发情求得到回来的数据，往下面存
      articles:[]

    }
  },
  async created(){
    // 使用await需要使用async
    // 使用axios上面要进行导入
      const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
      
      //console.log(res)//此时res的data中的result中rows返回了我们所需的数据
      //所以我们 将我们发情求得到回来的数据，往articles存，
      this.articles = res.data.result.rows
      // 然后就可以进行渲染了
      
  }
}
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
}
.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>