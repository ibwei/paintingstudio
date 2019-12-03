<template>
  <div class="top-menu">
    <div class="phone-nav">
      <van-nav-bar
        title="标题"
        left-text="logo"
        right-text="按钮"
        :fixed="true"
        :z-index="99"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <div slot="left" class="left">
          <div class="logo">
            <img
              src="../../assets/images/logo/logo.jpg"
              width="100%"
              height="100%"
              alt
            />
          </div>
        </div>
        <div slot="title" class="title">
          <div>
            <van-icon
              size="30px"
              :color="heartColor"
              name="like"
              @click="changeHeartColor"
            />
          </div>
        </div>
        <div slot="right" class="right">
          <div class="menu">
            <transition name="fade">
              <span v-show="!isOpen" @click="hideSticky" class="icon iconfont"
                >&#xeb71;</span
              >
            </transition>
            <transition name="show">
              <van-icon
                v-show="isOpen"
                @click="showSticky"
                :key="2"
                name="cross"
                size="20px"
                color="rgba(0,0,0,0.6)"
              />
            </transition>
          </div>
        </div>
      </van-nav-bar>
    </div>
    <div class="pc-nav">
      <div class="pc-nav-bar" id="new-nav">
        <div class="nav-left">
          <img src="../../assets/images/logo/logo.jpg" style="max-height:30px">
          <nav class="pc-navs">
            <a-popover placement="bottom">
              <template slot="content">
                <p>Content</p>
                <p>Content</p>
              </template>
              <div class="nav-item">
                <span>主页</span>
                <span class="icon iconfont">&#xe60e;</span>
              </div>
            </a-popover>
            <div class="nav-item">
              <span>热门课程</span>
              <span class="icon iconfont">&#xe60d;</span>
            </div>
            <div class="nav-item">
              <span>学生作品</span>
              <span class="icon iconfont">&#xe618;</span>
            </div>
            <div class="nav-item">
              <span>关于我们</span>
              <span class="icon iconfont">&#xe672;</span>
            </div>
            <div class="nav-item">
              <span>联系我们</span>
              <span class="icon iconfont">&#xe616;</span>
            </div>
          </nav>
        </div>
        <div class="heart-cover">
          <van-icon
            size="30px"
            @click="changeHeartColor"
            :color="heartColor"
            :finished="true"
            name="like"
          />
        </div>
      </div>
    </div>
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
          <van-icon
            size="20px"
            color="rgba(0,0,0,0.8)"
            :finished="true"
            :name="item.icon"
          />
        </van-cell>
      </van-list>
    </van-popup>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { Color } from '../../config/color';
export default {
  props: {},
  data() {
    return {
      Color,
      isOpen: false,
      heartColor: 'rgba(0,0,0,0.4)',
      list: [
        {
          path: '/',
          icon: 'wap-home-o',
          name: '首页'
        },
        {
          path: 'recruitment',
          icon: 'label-o',
          name: '招生事项'
        },
        {
          path: 'recruitment',
          icon: 'manager-o',
          name: '师资'
        },
        {
          path: 'recruitment',
          icon: 'cluster-o',
          name: '环境'
        },
        {
          path: 'works',
          icon: 'photo-o',
          name: '学生作品'
        },
        {
          path: 'position',
          icon: 'location-o',
          name: '地点'
        },
        {
          path: 'contact',
          icon: 'phone-circle-o',
          name: '联系我们'
        }
      ],
      loading: false,
      finished: true,
      /* 电脑端导航栏 */
      navbarOptions: {
        elementId: 'main-navbar',
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: './',
        brandImage: require('../../assets/images/logo/logo.jpg'),
        brandImageAltText: 'brand-image',
        /* collapseButtonImageOpen: require(''),
        collapseButtonImageClose: require(''), */
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        tooltipAnimationType: 'shift-away',
        menuOptionsLeft: [
          {
            type: 'link',
            text: '主页',
            path: '/',
            subMenuOptions: [
              {
                isLinkAction: true,
                type: 'link',
                text: '热门课程',
                subText: '各种丰富的绘画课程，还能为你定制。艺术，与生俱来。',
                path: '/about',
                iconLeft: '<span class="icon iconfont">&#xe618;</span>'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: '画室环境',
                subText: '好的艺术陶冶，需要好的环境支撑，我们一致在这里等你。',
                path: './locations',
                iconLeft: '<span class="icon iconfont">&#xe66c;</span>'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: '画室动态',
                subText: '看看品贤画室最近都发生了什么？',
                path: './blog',
                iconLeft: '<span class="icon iconfont">&#xe6d9;</span>'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: '学生作品',
                subText: '看看曾经如你一般的小白最近画得怎么样了?',
                path: './blog',
                iconLeft: '<span class="icon iconfont">&#xe618;</span>'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: '为什么选择我们',
                subText: '为什么选择我们，看看我们的优势所在吧',
                path: './blog',
                iconLeft: '<span class="icon iconfont">&#xe65b;</span>'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: '在线报名',
                subText: '为兴趣，就现在。',
                path: './blog',
                iconLeft: '<span class="icon iconfont">&#xe616;</span>'
              }
            ]
          },
          {
            type: 'link',
            text: '热门课程',
            path: './course',
            iconRight: '<span class="icon iconfont">&#xe60d;</span>'
          },
          {
            type: 'link',
            text: '学生作品',
            path: './pricing',
            iconRight: '<span class="icon iconfont">&#xe618;</span>'
          },
          {
            type: 'link',
            text: '关于我们',
            path: './pricing',
            iconRight: '<span class="icon iconfont">&#xe672;</span>'
          },
          {
            type: 'link',
            text: '联系我们',
            path: './contact',
            iconRight: '<span class="icon iconfont">&#xe616;</span>'
          }
        ]
      }
    };
  },
  computed: {
    ...mapState(['isPhone']) // 加载设备类型
  },
  created() {
    if (process.client) {
      this.heartColor = localStorage.getItem('heartColor')
        ? localStorage.getItem('heartColor')
        : 'rgba(0,0,0,0.4)';
    }
  },
  mounted() {},

  methods: {
    /**
     * @method 导航到具体页面
     * @param {listItem}
     * @return void
     */
    navToPage(item) {
      this.$router.push({ path: item.path });
      this.isOpen = false;
    },
    onLoad() {
      // 异步更新数据
      // 加载状态结束
      this.loading = true;
      this.finished = true;
      // 数据全部加载完成
    },
    onClickLeft() {
      this.$toast('返回');
    },
    onClickRight() {
      this.isOpen = !this.isOpen;
    },
    changeHeartColor() {
      if (this.heartColor === 'red') {
        this.$toast('谢谢你再次喜欢我!');
      } else {
        this.$toast('谢谢你喜欢我!');
        localStorage.setItem('heartColor', '#cf2729');
        this.heartColor = '#cf2729';
      }
    },
    hideSticky() {
      this.$emit('menu-open');
    },
    showSticky() {
      this.$emit('menu-close');
    }
  }
};
</script>
<style scoped lang="less">
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
  z-index: 999;
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
  padding: 0 60px;
}
.heart-cover {
  cursor: pointer;
}
/** 导航样式 */
.flex {
  display: -webkit-flex;
  display: flex;
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
  font-size: 14.4px;
}
.nav-item {
  .flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-right: 18px;
}
.nav-item .iconfont {
  font-size: 17px;
  margin-left: 5px;
}
@media screen and(max-width: 720px) {
  .pc-nav {
    display: none;
  }
  .phone-nav {
    display: block;
    position: relative;
    z-index: 9999;
  }
}
</style>
