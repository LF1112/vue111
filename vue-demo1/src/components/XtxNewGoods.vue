<template>
  <!-- 新鲜好物 -->
  <div class="goods wrapper">
      <div class="title">
        <div class="left">
          <h3>新鲜好物</h3>
          <p>新鲜出炉 品质靠谱</p>
        </div>
        <div class="right">
          <a href="#" class="more"
            >查看全部<span class="iconfont icon-arrow-right-bold"></span
          ></a>
        </div>
      </div>
      <div class="bd">
        <ul>
          <!-- 小的样式本质都是同一组件，只要将其多次渲染即可 -->
          <!-- 此时li只需要一个，且这个li就是我们需要完整封装的结构 -->
         <BaseGoodsitem></BaseGoodsitem>
         <BaseGoodsitem></BaseGoodsitem>
         <BaseGoodsitem></BaseGoodsitem>
         <BaseGoodsitem></BaseGoodsitem>
          <!-- <li>
            <a href="#">
              <div class="pic"><img src="@/assets/images/goods2.png" alt="" /></div>
              <div class="txt">
                <h4>KN95级莫兰迪色防护口罩</h4>
                <p>¥ <span>566</span></p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="pic"><img src="@/assets/images/goods3.png" alt="" /></div>
              <div class="txt">
                <h4>法拉蒙高颜值记事本可定制</h4>
                <p>¥ <span>58</span></p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="pic"><img src="@/assets/images/goods4.png" alt="" /></div>
              <div class="txt">
                <h4>科技布布艺沙发</h4>
                <p>¥ <span>3759</span></p>
              </div>
            </a>
          </li> -->
        </ul>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* 新鲜好物 */
.goods .bd ul {
  display: flex;
  justify-content: space-between;
}


</style>