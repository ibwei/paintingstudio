<template>
  <div class="app" ref="app">
    <div>
      <top-menu></top-menu>
    </div>
    <!-- <Affix/> -->
    <nuxt class="nuxt-content" />
    <div>
      <bottom-footer></bottom-footer>
    </div>
    <!-- 底部标题栏 -->
    <van-tabbar v-model="menuIndex">
      <van-tabbar-item icon="wap-home-o">品贤画室</van-tabbar-item>
      <van-tabbar-item icon="hot-o">课程介绍</van-tabbar-item>
      <van-tabbar-item icon="photo-o">作品</van-tabbar-item>
      <van-tabbar-item icon="comment-circle-o">联系我们</van-tabbar-item>
    </van-tabbar>
    <!-- 右侧悬浮快捷入口 -->
    <sticky v-on:wechat-click="showQRCode"></sticky>
    <van-popup v-model="wechatQRCodeshow">
      <lazy-component>
        <img src="../assets/images/weixin.png" class="qr-code" width="120" height="120" alt />
      </lazy-component>
    </van-popup>
  </div>
</template>

<script>
import topMenu from '../components/common/topMenu';
import bottomFooter from '../components/common/bottomFooter';
import sticky from '../components/common/sticky';
export default {
  name: 'Default',
  components: {
    topMenu,
    bottomFooter,
    sticky
  },
  data () {
    return {
      menuIndex: 0,
      wechatQRCodeshow: false
    };
  },
  watch: {
    menuIndex (newV, oldV) {
      if (newV === oldV) {
        return;
      }
      switch (newV) {
        case 0:
          this.$router.push({ path: '/' });
          break;
        case 1:
          this.$router.push({ path: 'recuitment' });
          break;
        case 2:
          this.$router.push({ path: 'works' });
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

  },
  methods: {
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
  padding: 10px;
}
</style>
