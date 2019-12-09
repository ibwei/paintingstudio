<template>
  <div ref="app" class="app">
    <div v-if="!currentPath.startsWith('/about/detail')">
      <top-menu @menu-open="hideSticky" @menu-close="showSticky"></top-menu>
    </div>
    <!-- <Affix/> -->
    <nuxt class="nuxt-content" />
    <div v-if="!currentPath.startsWith('/course') && !currentPath.startsWith('/about/detail')">
      <bottom-footer></bottom-footer>
    </div>
    <!-- 底部标题栏 -->
    <div class="tabbar-menu">
      <van-tabbar
        v-model="menuIndex"
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

export default {
  name: 'Default',
  components: {
    topMenu,
    bottomFooter,
    sticky,
    scrollTop
  },
  data () {
    return {
      currentPath: '/',
      stickyShow: true,
      menuIndex: 0,
      Color,
      wechatQRCodeshow: false
    };
  },
  watch: {
    // 监听路由,某些页面不需要显示footer
    $route (to, from) {
      console.log('to :', to);
      console.log('from :', from);
      this.currentPath = this.$route.path;
      console.log('this.currentPath :', this.currentPath);
    },
    menuIndex (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      switch (newV) {
        case 0:
          this.$router.push({ path: '/' });
          break;
        case 1:
          this.$router.push({ path: 'course' });
          break;
        case 2:
          this.$router.push({ path: 'about' });
          break;
        case 3:
          this.$router.push({ path: 'contact' });
          break;
        default:
          this.$toast('操作异常')
      }
    }
  },
  created () {
    this.currentPath = this.$route.path;
  },
  methods: {
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
