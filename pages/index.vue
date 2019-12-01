<template>
  <div class="app-container">
    <!-- 顶部通知栏 -->
    <van-notice-bar
      :color="Color.colorbrand"
      :speed="50"
      background="rgba(244,205,205,1)"
      left-icon="volume-o"
      :scrollable="true"
    >
品贤画室新开业，现在报名享受各种优惠，详情请电话联系我们。
</van-notice-bar>
    <!-- 轮播图 -->
    <carousel />
    <!-- 招生 -->
    <recruitment />
    <!-- 介绍 -->
    <painting-introduce />
    <!-- 优势 -->
    <advantage />

    <!-- 师资力量 -->
    <teachers />
    <!-- 底部菜单栏 -->
    <message-board />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import carousel from '../components/works/carousel';
import recruitment from '../components/works/recruitment';
import advantage from '../components/works/advantage';
import teachers from '../components/works/teachers'
import paintingIntroduce from '../components/index/paintingIntroduce';
import { isPhone } from '../utils/index';
import MessageBoard from '../components/common/messageBoard';
import { Color } from '../config/color';
export default {
  components: {
    carousel,
    paintingIntroduce,
    recruitment,
    advantage,
    MessageBoard,
    teachers
  },
  data () {
    return {
      Color
    };
  },
  computed: {
    ...mapState(['isPhone']) // 利用vuex的辅助函数把isPhone代理到当前组件,用this.isPhone访问
  },

  created () {
    if (process.client) {
      this.$nextTick(() => {
        // 只要在客户端,并且拖动浏览器,就会触发检查设备,以达到响应式
        // 开始手动调用一次
        this.checkDevice();
      });
    }
  },
  mounted () {
    window.addEventListener('resize', this.checkDevice);
  },
  destroyed () {
    window.removeEventListener('resize', this.checkDevice);
  },
  methods: {
    ...mapMutations(['changeIsPhone']), // 利用vuex的辅助函数把changeIsPhone代理到当前组件,用this.changeIsPhone访问

    /**
     * @method 检查是什么设备
     */
    checkDevice () {
      // 在客户端才能获取到dom,才能判断是否是移动设备
      if (process.client) {
        const result = isPhone();
        this.changeIsPhone(result); // 将结果写入到vuex仓库里
      }
    }
  }
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
</style>
