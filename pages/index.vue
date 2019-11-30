<template>
  <div class="app-container">
    <carousel />
    <recruitment />
    <paintingIntroduce />
    <advantage />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import carousel from '../components/works/carousel';
import recruitment from '../components/works/recruitment';
import advantage from '../components/works/advantage';
import paintingIntroduce from '../components/index/paintingIntroduce';
import { isPhone } from '../utils/index';
export default {
  components: {
    carousel,
    paintingIntroduce,
    recruitment,
    advantage
  },
  data() {
    return {
      value: 'na'
    };
  },
  computed: {
    ...mapState(['isPhone']) // 利用vuex的辅助函数把isPhone代理到当前组件,用this.isPhone访问
  },
  created() {
    if (process.client) {
      this.$nextTick(() => {
        // 只要在客户端,并且拖动浏览器,就会触发检查设备,以达到响应式
        // 开始手动调用一次
        this.checkDevice();
      });
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkDevice);
  },
  destroyed() {
    window.removeEventListener('resize', this.checkDevice);
  },
  methods: {
    ...mapMutations(['changeIsPhone']), // 利用vuex的辅助函数把changeIsPhone代理到当前组件,用this.changeIsPhone访问

    /**
     * @method 检查是什么设备
     */
    checkDevice() {
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
