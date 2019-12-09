<template>
  <div class="app-container">
    <!-- 画室环境 -->
    <paintingEnvironment v-scroll-reveal.smooth="{ easing: 'ease-in' }" />

    <!-- 师资力量 -->
    <teachers v-scroll-reveal.smooth="{ easing: 'ease-in' }" />

    <!-- 学生作品 -->
    <worksCarous v-scroll-reveal.smooth="{ easing: 'ease-in' }" />

    <!-- 优势 -->
    <advantage v-scroll-reveal.smooth="{ easing: 'ease-in' }" />

    <!-- 底部菜单栏 -->
    <message-board v-scroll-reveal.smooth="{ easing: 'ease-in' }" />
  </div>
</template>

<script>
import advantage from '../../components/works/advantage';
import teachers from '../../components/works/teachers';
import worksCarous from '../../components/index/worksCarousel';
import MessageBoard from '../../components/common/messageBoard';
import paintingEnvironment from '../../components/index/paintingEnvironment';
import { Color } from '../../config/color';
export default {
  components: {
    advantage,
    worksCarous,
    MessageBoard,
    paintingEnvironment,
    teachers
  },
  data() {
    return {
      Color
    };
  },
  methods: {},
  watch: {
    /** 监听路由 */
    $router(to, from) {
      console.log('routerto :', to);
      console.log('router from :', from);
    },
  }
};
</script>

<style lang="less" scoped></style>
