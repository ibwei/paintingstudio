<template>
  <div ref="app" class="app">
    <div v-if="!currentPath.startsWith('/about/detail')">
      <top-menu @menu-open="hideSticky" @menu-close="showSticky"></top-menu>
    </div>
    <!-- <Affix/> -->
    <nuxt class="nuxt-content" />
    <!-- 底部标题栏 -->
    <div class="tabbar-menu">
      <van-tabbar
        v-model="currentMenuIndex"
        :z-index="9999"
        :active-color="Color.colorbrand"
        inactive-color="#000"
      >
        <van-tabbar-item icon="wap-home-o">品贤画室</van-tabbar-item>
        <van-tabbar-item icon="hot-o">课程介绍</van-tabbar-item>
        <van-tabbar-item icon="photo-o">关于我们</van-tabbar-item>
        <van-tabbar-item icon="comment-circle-o">联系我们</van-tabbar-item>
      </van-tabbar>
    </div>
    <!-- 右侧悬浮快捷入口 -->
    <div v-if="stickyShow && !currentPath.startsWith('/about/detail')">
      <sticky @wechat-click="showQRCode"></sticky>
    </div>
    <van-popup v-model="wechatQRCodeshow">
      <img src="../assets/images/weixin.png" class="qr-code" width="150" height="150" alt />
    </van-popup>
    <!-- 回到顶部 -->
    <scroll-top />
  </div>
</template>

<script>
import { Color } from '../config/color'
import topMenu from '../components/common/topMenu';
import bottomFooter from '../components/common/bottomFooter';
import sticky from '../components/common/sticky';
import scrollTop from '../components/common/scrollTop';
import { isPhone } from '../utils/index';
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'Default',
  components: {
    topMenu,
    bottomFooter,
    sticky,
    scrollTop
  },
  computed: {
    ...mapState(['menuIndex', 'isPhone']),
  },
  data () {
    return {
      currentMenuIndex: 0,
      currentPath: '/',
      stickyShow: true,
      Color,
      wechatQRCodeshow: false
    };
  },
  created () {
    if (process.client) {
      this.currentPath = this.$route.path;
      this.checkDevice();
    }
  },
  mounted () {
    window.addEventListener('resize', this.checkDevice);
  },
  destroyed () {
    window.removeEventListener('resize', this.checkDevice);
  },
  watch: {
    currentMenuIndex (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      switch (newV) {
        case 0:
          this.$router.push({ path: '/' });
          break;
        case 1:
          this.$router.push({ path: '/course' });
          break;
        case 2:
          this.$router.push({ path: '/about' });
          break;
        case 3:
          this.$router.push({ path: '/contact' });
          break;
        default:
          this.$toast('操作异常')
      }
    },
    menuIndex (newV, oldV) {
      console.log('hahah')
      this.currentMenuIndex = newV;
    }
  },
  methods: {
    ...mapMutations(['changeIsPhone']), // 利用vuex的辅助函数把changeIsPhone代理到当前组件,
    /**
      * @method 检查是什么设备
      */
    checkDevice () {
      // 在客户端才能获取到dom,才能判断是否是移动设备
      if (process.client) {
        const result = isPhone();
        this.changeIsPhone(result); // 将结果写入到vuex仓库里
      }
    },
    hideSticky () {
      this.stickyShow = false;
    },
    showSticky () {
      this.stickyShow = true;
    },
    showQRCode () {
      if (this.wechatQRCodeshow === true) {
        this.wechatQRCodeshow = false;
        return;
      }
      this.wechatQRCodeshow = !this.wechatQRCodeshow;
    }
  }

};
</script>

<style scoped lang="less">
.nuxt-content {
  background: #fff;
}
.qr-code {
  padding: 1px;
}
@media screen and( min-width:720px) {
  .tabbar-menu {
    display: none;
  }
}
</style>
