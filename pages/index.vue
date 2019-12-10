<template>
  <div class="app-container">
    <!-- 顶部通知栏 -->
    <div class="phone-notice">
      <van-notice-bar
        :color="Color.colorbrand"
        :speed="50"
        background="rgba(244,205,205,1)"
        left-icon="volume-o"
        :scrollable="true"
      >品贤画室新开业，现在报名享受各种优惠，详情请电话联系我们。</van-notice-bar>
    </div>

    <!-- 轮播图 -->
    <carousel v-scroll-reveal.scaleUp="{ scale: 0.15 }" />

    <!-- 招生详情 -->
    <recruitment v-scroll-reveal.scaleUp="{ scale: 0.15 }" />

    <!-- 介绍 -->
    <paintIntroduce v-scroll-reveal.smooth="{ easing: 'ease-in' }" />

    <!-- 动态 -->
    <paintAffaris v-scroll-reveal.smooth="{ easing: 'ease-in' }" />
    <!-- 画室环境 -->
    <paintingEnvironment v-scroll-reveal.smooth="{ easing: 'ease-in' }" />

    <!-- 师资力量 -->
    <teachers v-scroll-reveal.smooth="{ easing: 'ease-in' }" />

    <!-- 学生作品 -->
    <worksCarous v-scroll-reveal.smooth="{ easing: 'ease-in' }" />

    <!-- 优势 -->
    <advantage v-scroll-reveal.smooth="{ easing: 'ease-in' }" />

    <!-- 底部菜单栏 -->
    <message-board v-scroll-reveal.smooth="{easing:'ease-in'}" />

    <!-- 底部footer -->
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import carousel from '../components/works/carousel';
import recruitment from '../components/works/recruitment';
import advantage from '../components/works/advantage';
import teachers from '../components/works/teachers';
import paintIntroduce from '../components/index/paintIntroduce';
import worksCarous from '../components/index/worksCarousel';
import paintAffaris from '../components/index/paintAffaris';
import worksCarousel from '../components/index/worksCarousel';
import MessageBoard from '../components/common/messageBoard';
import paintingEnvironment from '../components/index/paintingEnvironment';
import BottomFooter from '../components/common/bottomFooter'
import { Color } from '../config/color';
export default {
  components: {
    carousel,
    paintIntroduce,
    recruitment,
    advantage,
    MessageBoard,
    paintingEnvironment,
    teachers,
    BottomFooter
  },
  data () {
    return {
      Color
    };
  },
};
</script>

<style lang="less" scoped>
.app-container {
  background: #fff;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

@media screen and(min-width: 720px) {
  .phone-notice {
    display: none;
  }
}
</style>
