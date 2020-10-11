<template>
  <div class="top-menu">
    <div v-if="topbarShow" class="phone-nav">
      <van-nav-bar
        title="标题"
        left-text="logo"
        right-text="按钮"
        :fixed="true"
        :z-index="99999"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <div slot="left" class="left">
          <div class="logo">
            <img
              src="../../assets/images/logo/logo.jpg"
              width="100%"
              height="100%"
              @click="navToHome"
              alt
            />
          </div>
        </div>
        <div slot="title" class="title">
          <div ref="phoneHeart" :class="heartClass">
            <van-icon
              v-if="isLogin"
              size="30px"
              :color="heartColor"
              name="like"
              style="margin-top: 8px;"
              @click="changeHeartColor"
            />
            <van-icon
              v-else
              size="30px"
              color="rgba(0,0,0,0.6)"
              name="contact"
              style="margin-top: 8px;"
              @click="openLoginDialog"
            />
          </div>
        </div>
        <div slot="right" class="right">
          <div class="menu">
            <transition name="fade">
              <span v-show="!isOpen" class="icon iconfont" @click="hideSticky">&#xeb71;</span>
            </transition>
            <transition name="show">
              <van-icon
                v-show="isOpen"
                :key="2"
                name="cross"
                size="20px"
                color="rgba(0,0,0,0.6)"
                @click="showSticky"
              />
            </transition>
          </div>
        </div>
      </van-nav-bar>
    </div>
    <div class="pc-nav">
      <div id="new-nav" class="pc-nav-bar">
        <div class="nav-left">
          <img src="../../assets/images/logo/logo.jpg" @click="navToHome" class="menuLogo" />
          <nav class="pc-navs">
            <div
              v-for="(nav, index) of navbarOptions.menuOptions"
              :key="index"
              @click="navToPage(nav)"
              class="nav-item"
            >
              <span>{{ nav.text }}</span>
              <span
                :class="{
                  icon: true,
                  iconfont: true,
                }"
                @click="navToPage(nav)"
                v-html="nav.icon"
              ></span>
            </div>
          </nav>
        </div>
        <div ref="pcHeart" class="heart-cover" :class="heartClass">
          <van-icon
            v-if="isLogin"
            size="30px"
            :color="heartColor"
            :finished="true"
            name="like"
            @click="changeHeartColor"
          ></van-icon>
          <van-icon v-else size="30px" @click="openLoginDialog" name="user-circle-o"></van-icon>
        </div>
      </div>
    </div>
    <div class="pc-nav-margin"></div>
    <van-popup
      v-model="isOpen"
      position="right"
      :style="{
        height: '100%',
        marginTop: '45px',
        width: '40%',
        zIndex: '9999999',
      }"
    >
      <van-list :v-model="false" :finished="true">
        <van-cell
          v-for="(item, index) in list"
          :key="index"
          :title="item.name"
          @click="navToPage(item)"
        >
          <van-icon size="20px" color="rgba(0,0,0,0.8)" :finished="true" :name="item.icon" />
        </van-cell>
      </van-list>
    </van-popup>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import { Color } from '../../config/color';
import { Api } from '@/api/index';
import { getDay } from '@/utils/index';
export default {
  props: {},
  data () {
    return {
      Color,
      heartClass: 'animated pulse infinite delay-0.5s',
      isOpen: false,
      heartColor: 'rgba(0,0,0,0.4)',
      list: [
        {
          path: '/',
          icon: 'wap-home-o',
          name: '首页',
        },
        /*   {
          path: '/course',
          icon: 'label-o',
<<<<<<< HEAD
          name: '热门课程' 
        }, */
=======
          name: '招生简章',
        },
>>>>>>> ea2c4af43da9097bb9f5d7f5fa5a6557624a729b
        {
          path: '/news',
          icon: 'notes-o',
          name: '画室动态',
        },
        {
          path: '/contact',
          icon: 'phone-circle-o',
          name: '联系我们',
        },
        {
          path: '/me',
          icon: 'manager-o',
          name: '个人中心',
        },
      ],
      loading: false,
      finished: true,
      /* 电脑端导航栏 */
      navbarOptions: {
        menuLeftLogo: require('../../assets/images/logo/logo.jpg'),
        menuOptions: [
          {
            type: 'link',
            text: '主页',
            path: '/',
            icon: '&#xe672;',
          },
          /*  {
            type: 'link',
            text: '招生简章',
            path: '/course',
            icon: '&#xe60d;',
            subMenuOptions: [],
          }, */
          {
            type: 'link',
            text: '画室动态',
            path: '/news',
            icon: '&#xe60d;',
            subMenuOptions: [],
          },
          {
            type: 'link',
            text: '联系我们',
            path: '/contact',
            icon: '&#xe616;',
            subMenuOptions: [],
          },
        ],
      },
    };
  },
  computed: {
    ...mapState(['isPhone', 'topbarShow', 'isLogin']), // 加载设备类型;
  },
  created () {
    if (process.client) {
      this.heartColor = localStorage.getItem('heartColor')
        ? localStorage.getItem('heartColor')
        : 'rgba(0,0,0,0.4)';
      if (this.heartColor === '#cf2729') {
        this.heartClass = '';
      }
      //监听路由
      const path = this.$route.path;
      this.changeTabbar(path);
    }
  },

  methods: {
    ...mapMutations(['changeMenuIndex', 'changeLoginDialogShow']),
    /**
     * @method 导航到具体页面
     * @param {listItem}
     * @return void
     */
    navToPage (item) {
      this.changeTabbar(item.path);
      this.isOpen = false;
      this.$router.push({ path: item.path });
    },

    navToHome () {
      this.$router.push({ path: '/' });
    },

    openLoginDialog () {
      this.changeLoginDialogShow(true);
    },

    // 网站点赞
    addPraise () {
      this.$axios({
        method: 'post',
        url: Api.addPraise,
        data: {
          praise_time: getDay(),
          device: this.isPhone ? '手机' : '电脑',
        },
      })
        .then((res) => {
          if (res.data.resultCode === 0) {
            localStorage.setItem('heartColor', '#cf2729');
            this.heartColor = '#cf2729';
            this.$toast('点赞成功，谢谢你喜欢我。');
          } else {
            this.$toast('点赞失败，未知异常。');
          }
        })
        .catch(() => {
          this.$toast('点赞失败，未知异常。');
        });
    },
    // 监听路由,更改tabbar激活菜单
    changeTabbar (path) {
      let menuIndex;
      if (path === '/course') {
        menuIndex = 1;
      } else if (path === '/news') {
        menuIndex = 2;
      } else if (path === '/contact') {
        menuIndex = 3;
      } else {
        menuIndex = 0;
      }
      this.changeMenuIndex(menuIndex);
    },
    onLoad () {
      // 异步更新数据
      // 加载状态结束
      this.loading = true;
      this.finished = true;
      // 数据全部加载完成
    },
    onClickLeft () { },
    onClickRight () {
      this.isOpen = !this.isOpen;
    },
    changeHeartColor () {
      if (this.heartColor === '#cf2729') {
        this.$toast('谢谢你再次喜欢我!');
      } else {
        this.addPraise();
      }
      this.$refs.phoneHeart.className = '';
      this.$refs.pcHeart.className = '';
    },
    hideSticky () {
      this.$emit('menu-open');
    },
    showSticky () {
      this.$emit('menu-close');
    },
  },
};
</script>
<style scoped lang="less">
@import url('../../assets/css/color.less');
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
  display: none;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.show-enter-active,
.show-leave-active {
  transition: all 0.2s;
  display: none;
}
.show-enter, .show-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}
.left {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
}
.logo {
  width: 100px;
  height: auto;
  z-index: 999;
}
.menu,
.icon {
  font-size: 26px;
}
.phone-nav {
  display: none;
}
.pc-nav {
  display: block;
  width: 100%;
  position: fixed;
  z-index: 999999;
  background: rgba(255, 255, 255, 0.985);
}
.pc-nav-margin {
  width: 100%;
  height: 60px;
  background: transparent;
}
.iconfont {
  font-size: 30px;
}

.pc-nav-bar {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 0px;
}
.heart-cover,
.nav-item {
  font-size: 14px;
  cursor: pointer;
}
/** 导航样式 */
.flex {
  display: -webkit-flex;
  display: flex;
}
.menuLogo {
  max-height: 30px;
  max-width: 100px;
}
.nav-left {
  .flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: 15px 0px 15px 10px;
}
.pc-navs {
  .flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding-left: 30px;
  font-size: 14px;
}
.nav-item {
  .flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-right: 18px;
  position: relative;
}
.nav-item span {
  line-height: 17px;
}
.arrow {
  transition: all 0.5s;
}
.nav-item:hover span,
.nav-item:hover .iconfont {
  color: @color-brand;
}

.nav-item:hover .arrow {
  transform: rotate(180deg);
}
.nav-item:hover .submenu {
  opacity: 0.965;
  width: 336px;
  overflow: visible;
}
.nav-item .iconfont {
  font-size: 17px;
  margin-left: 5px;
}
.submenu {
  background: transparent;
  position: absolute;
  top: 25px;
  left: -165px;
  transition: opacity 0.5s;
  opacity: 0;
  padding-top: 10px;
  overflow: hidden;
  width: 0;
}
.submenu-arrow {
  left: 55%;
  top: 7px;
  transform: translateX(-50%) rotate(45deg);
  border-top-color: #fff;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: #fff;
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  position: absolute;
  display: block;
  width: 8.48528137px;
  height: 8.48528137px;
  background: transparent;
  border-width: 4.24264069px;
  border-style: solid;
  z-index: 3;
}
.submenu-list {
  color: @color-grey-1;
  .flex;
  flex-flow: row nowrap;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid @color-black-3;
  background: rgba(255, 255, 255, 0.95);
  overflow: hidden;
}
.submenu-list:hover {
  color: @color-brand;
}
.submenu-logo {
  padding: 10px;
}
.submenu-title {
  padding: 10px 0 0 10px;
  font-size: 14px;
}
.submenu-content {
  padding: 5px 20px 20px 10px;
  width: 300px;
}
@media screen and(max-width: 720px) {
  .pc-nav {
    display: none;
  }
  .pc-nav-margin {
    display: none;
  }
  .phone-nav {
    display: block;
    position: relative;
    z-index: 9999;
    width: 100%;
    min-height: 45px;
  }
}
</style>
