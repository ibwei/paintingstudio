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
    <carousel v-scroll-reveal.scaleUp="{ scale: 0.15 }" :list="carouselList" />

    <!-- 招生详情 -->
    <recruitment v-scroll-reveal.scaleUp="{ scale: 0.15 }" />

    <!-- 介绍 -->
    <paintIntroduce v-scroll-reveal.smooth="{ easing: 'ease-in' }" />

    <!-- 动态 -->
    <paintAffaris :articleList="articleList" v-scroll-reveal.smooth="{ easing: 'ease-in' }" />
    <!-- 画室环境 -->
    <paintingEnvironment v-scroll-reveal.smooth="{ easing: 'ease-in' }" />

    <!-- 师资力量 -->
    <teachers v-scroll-reveal.smooth="{ easing: 'ease-in' }" />

    <!-- 学生作品 -->
    <worksCarousel
      :studentWorksList="studentWorksList"
      v-scroll-reveal.smooth="{ easing: 'ease-in' }"
    />

    <!-- 优势 -->
    <advantage v-scroll-reveal.smooth="{ easing: 'ease-in' }" />

    <!-- 底部菜单栏 -->
    <message-board v-scroll-reveal.smooth="{ easing: 'ease-in' }" />

    <!-- 底部footer -->
    <bottom-footer :paintingInfo="paintingInfo[0]"></bottom-footer>
  </div>
</template>

<script>
import carousel from '../components/works/carousel';
import recruitment from '../components/works/recruitment';
import advantage from '../components/works/advantage';
import teachers from '../components/works/teachers';
import paintIntroduce from '../components/index/paintIntroduce';
import paintAffaris from '../components/index/paintAffaris';
import worksCarousel from '../components/index/worksCarousel';
import MessageBoard from '../components/common/messageBoard';
import paintingEnvironment from '../components/index/paintingEnvironment';
import BottomFooter from '../components/common/bottomFooter';
import { Color } from '../config/color';
import { Api } from '../api/index';
import { mapMutations } from 'vuex';
export default {
  /**
   * 获取服务端渲染数据
   */

  /**
 * 获取服务端渲染数据
 */

  async asyncData ({ $axios }) {
    // 获取画室信息
    const paintingInfo = await $axios({ method: 'post', url: Api.getPaintingInfo });
    // 获取前台轮播图
    const bannerList = await $axios.get(Api.courselBannerList);
    // 获取首页画室动态列表
    const studentWorksList = await $axios({ method: 'get', url: Api.getStudentWorksList, data: { start: 0, end: 30 } });
    // 获取首页文章列表
    const articleList = await $axios({ method: 'post', url: Api.getArticleList, data: { pageSize: 6, pageNum: 1 } })
    return { carouselList: bannerList.data.data, paintingInfo: paintingInfo.data.data, articleList: articleList.data.data, studentWorksList: studentWorksList.data.data }
  },
  components: {
    carousel,
    paintIntroduce,
    recruitment,
    advantage,
    MessageBoard,
    paintAffaris,
    paintingEnvironment,
    teachers,
    worksCarousel,
    BottomFooter
  },
  data () {
    return {
      Color
    };
  },
  created () {
    if (process.client) {
      console.log(Api.getPaintingInfo);
      this.setPaintingInfo(this.paintingInfo[0]);
      localStorage.setItem(
        'paintingInfo',
        JSON.stringify(this.paintingInfo[0])
      );
    }
  },
  methods: {
    ...mapMutations(['setPaintingInfo']),
  }
}
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
