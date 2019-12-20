<template>
  <div class="top-menu">
    <div class="phone-nav">
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
            <img src="../../assets/images/logo/logo.jpg" width="100%" height="100%" alt />
          </div>
        </div>
        <div slot="title" class="title">
          <div ref="phoneHeart" :class="heartClass">
            <van-icon size="30px" :color="heartColor" name="like" @click="changeHeartColor" />
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
          <img :src="navbarOptions.menuLeftLogo" class="menuLogo" />
          <nav class="pc-navs">
            <!-- 菜单 -->
            <div v-for="(nav, index) of navbarOptions.menuOptions" :key="index" class="nav-item">
              <span @click="navToPage(nav)">{{ nav.text }}</span>
              <span
                :class="{
                  icon: true,
                  iconfont: true,
                  arrow: nav.icon == '&#xe60e;'
                }"
                @click="navToPage(nav)"
                v-html="nav.icon"
              ></span>
              <!-- 子菜单 -->
              <div
                v-if="
                  nav.subMenuOptions !== null && nav.subMenuOptions.length > 0
                "
                class="submenu"
              >
                <div class="submenu-arrow"></div>
                <div
                  v-for="(submenu, index1) of nav.subMenuOptions"
                  :key="index1"
                  class="submenu-list"
                  @click="navToPage(submenu)"
                >
                  <div class="submenu-logo" v-html="submenu.iconLeft"></div>
                  <div class="submenu-container">
                    <div class="submenu-title">{{ submenu.text }}</div>
                    <div class="submenu-content">{{ submenu.subText }}</div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div ref="pcHeart" class="heart-cover" :class="heartClass">
          <van-icon
            size="30px"
            :color="heartColor"
            :finished="true"
            name="like"
            @click="changeHeartColor"
          />
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
        zIndex: '9999999'
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
          name: '首页'
        },
        {
          path: '/course',
          icon: 'label-o',
          name: '热门课程'
        },
        {
          path: '/news',
          icon: 'notes-o',
          name: '画室动态'
        },
        {
          path: '/about',
          icon: 'info-o',
          name: '关于我们'
        },
        {
          path: '/contact',
          icon: 'phone-circle-o',
          name: '联系我们'
        }
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
            icon: '&#xe60e;',
            subMenuOptions: [
              {
                isLinkAction: true,
                type: 'link',
                text: '热门课程',
                subText: '各种丰富的绘画课程，还能为你定制。艺术，与生俱来。',
                path: '/course',
                iconLeft: '<span class="icon iconfont">&#xe618;</span>'
              },
              {
                type: 'link',
                text: '画室环境',
                subText: '好的艺术陶冶，需要好的环境支撑，我们一致在这里等你。',
                path: '/about',
                iconLeft: '<span class="icon iconfont">&#xe66c;</span>'
              },
              {
                type: 'link',
                text: '画室动态',
                subText: '看看品贤画室最近都发生了什么？',
                path: '/news',
                iconLeft: '<span class="icon iconfont">&#xe6d9;</span>'
              },
              {
                type: 'link',
                text: '学生作品',
                subText: '看看曾经如你一般的小白最近画得怎么样了?',
                path: '/about',
                iconLeft: '<span class="icon iconfont">&#xe618;</span>'
              }
            ]
          },
          {
            type: 'link',
            text: '热门课程',
            path: '/course',
            icon: '&#xe60d;',
            subMenuOptions: []
          },
          {
            type: 'link',
            text: '画室动态',
            path: '/news',
            icon: '&#xe60d;',
            subMenuOptions: []
          },
          {
            type: 'link',
            text: '关于我们',
            path: '/about',
            icon: '&#xe672;',
            subMenuOptions: []
          },
          {
            type: 'link',
            text: '联系我们',
            path: '/contact',
            icon: '&#xe616;',
            subMenuOptions: []
          }
        ]
      }
    };
  },
  computed: {
    ...mapState(['isPhone']) // 加载设备类型
  },
  created () {
    if (process.client) {
      this.heartColor = localStorage.getItem('heartColor')
        ? localStorage.getItem('heartColor')
        : 'rgba(0,0,0,0.4)';
      if (this.heartColor === '#cf2729') {
        this.heartClass = '';
      }
    }
  },
  mounted () {
    // ScrollReveal().reveal('.pc-nav');
  },

  methods: {
    ...mapMutations(['changeMenuIndex']),
    /**
     * @method 导航到具体页面
     * @param {listItem}
     * @return void
     */
    navToPage (item) {
      console.log('this item is');

      console.log(item)
      this.changeTabbar(item.path);
      this.isOpen = false;
      this.$router.push({ path: item.path });
    },
    // 监听路由,更改tabbar激活菜单
    changeTabbar (path) {
      let menuIndex;
      if (path === '/course') {
        menuIndex = 1;
      } else if (path === '/news') {
        menuIndex = 2;
      } else if (path === '/about') {
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
    onClickLeft () {
      this.$toast('返回');
    },
    onClickRight () {
      this.isOpen = !this.isOpen;
    },
    changeHeartColor () {
      if (this.heartColor === '#cf2729') {
        this.$toast('谢谢你再次喜欢我!');
      } else {
        this.$toast('谢谢你喜欢我!');
        localStorage.setItem('heartColor', '#cf2729');
        this.heartColor = '#cf2729';
      }
      this.$refs.phoneHeart.className = '';
      this.$refs.pcHeart.className = '';
    },
    hideSticky () {
      this.$emit('menu-open');
    },
    showSticky () {
      this.$emit('menu-close');
    }
  }
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
