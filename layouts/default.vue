<template>
  <div ref="app" class="app">
    <div v-if="!currentPath.startsWith('/about/detail')">
      <top-menu @menu-open="hideSticky" @menu-close="showSticky"></top-menu>
    </div>
    <!-- <Affix/> -->
    <nuxt class="nuxt-content" />
    <!-- 底部标题栏 -->
    <div v-show="tabbarShow || !isPhone" class="tabbar-menu">
      <van-tabbar
        v-model="currentMenuIndex"
        :z-index="99999"
        :active-color="Color.colorbrand"
        inactive-color="#000"
        :safe-area-inset-bottom="true"
      >
        <van-tabbar-item icon="wap-home-o" to="/">品贤画室</van-tabbar-item>
        <van-tabbar-item icon="hot-o" to="/course">课程介绍</van-tabbar-item>
        <van-tabbar-item icon="photo-o" to="/news">画室动态</van-tabbar-item>
        <van-tabbar-item icon="comment-circle-o" to="/contact">联系我们</van-tabbar-item>
      </van-tabbar>
    </div>
    <!-- 右侧悬浮快捷入口 -->
    <div v-if="stickyShow && !currentPath.startsWith('/about/detail')">
      <sticky @wechat-click="showQRCode"></sticky>
    </div>
    <van-popup v-model="wechatQRCodeshow">
      <template v-if="paintingInfo && paintingInfo.er_code">
        <img :src="paintingInfo.er_code" class="qr-code" width="150" height="150" alt />
      </template>
      <template v-else>
        <span>加载中...</span>
      </template>
    </van-popup>
    <!-- 回到顶部 -->
    <scroll-top />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { Color } from '../config/color';
import topMenu from '../components/common/topMenu';
import sticky from '../components/common/sticky';
import scrollTop from '../components/common/scrollTop';
import { isPhone, getDateTime } from '../utils/index';
import { Api } from '@/api/index';
export default {
  name: 'Default',
  components: {
    topMenu,
    sticky,
    scrollTop
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
  computed: {
    ...mapState(['menuIndex', 'isPhone', 'tabbarShow', 'paintingInfo'])
  },
  watch: {
    menuIndex (newV, oldV) {
      this.currentMenuIndex = newV;
    }
  },
  created () {
    if (process.client) {
      this.currentPath = this.$route.path;
      this.checkDevice();
      const paint = localStorage.getItem('paintingInfo');
      if (paint) {
        this.setPaintingInfo(JSON.parse(paint));
      } else {
        this.$router.push({ path: '/' })
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.checkDevice);
    window.addEventListener('unload', this.logoutStatistics);
    setTimeout(() => {
      this.loginStatistics();
    }, 1000);
  },
  destroyed () {
    window.removeEventListener('resize', this.checkDevice);
  },
  methods: {
    ...mapMutations(['changeIsPhone', 'setPaintingInfo']), // 利用vuex的辅助函数把changeIsPhone代理到当前组件,
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
    // 入口统计
    loginStatistics () {
      this.$axios({
        method: 'post',
        url: Api.userLogin,
        timeout: 10000,
        data: {
          login_time: getDateTime(),
          device: this.isPhone ? '手机' : '电脑'
        }
      }).then((res) => {
        if (res.data.resultCode === 0) {
          localStorage.setItem('currentId', res.data.data);
        } else {
          setTimeout(() => {
            this.loginStatistics();
          }, 50000);
        }
      }).catch(() => {
        setTimeout(() => {
          this.loginStatistics();
        }, 50000);
      })
    },

    async logoutStatistics () {
      await this.$axios({
        method: 'post',
        url: Api.userLogout,
        timeout: 10000,
        data: {
          id: localStorage.getItem('currentId'),
          logout_time: getDateTime()
        }
      });
      // 确保发送成功
      for (let i = 1; i < 1000000; i++) {
        for (let m = 1; m < 1000000; m++) { continue; }
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
