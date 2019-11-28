<template>
  <div class="top-menu">
    <van-nav-bar
      v-if="isPhone"
      title="标题"
      left-text="logo"
      right-text="按钮"
      :fixed="true"
      :z-index="999999"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <div class="left" slot="left">
        <div class="logo">
          <img src="../../assets/images/logo/logo.jpg" width="100%" height="100%" alt>
        </div>
      </div>
      <div class="title" slot="title">
        <div>
          <van-icon size="30px" @click="changeHeartColor" :color="heartColor" name="like"/>
        </div>
      </div>
      <div class="right" slot="right">
        <div class="menu">
          <span v-show="!isOpen" class="icon iconfont">&#xeb71;</span>
          <van-icon v-show="isOpen" name="cross" size="25px" color="rgba(0,0,0,0.4)"/>
        </div>
      </div>
    </van-nav-bar>
    <div v-else>暂无电脑端导航栏</div>
    <van-popup
      v-model="isOpen"
      position="right"
      :style="{ height:'100%',marginTop:'45px',width:'40%' }"
    >
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell
          v-for="(item,index) in list"
          :key="index"
          :title="item.name"
          @click="navToPage(item)"
        >
          <van-icon size="20px" color="rgba(0,0,0,0.8)" :name="item.icon"/>
        </van-cell>
      </van-list>
    </van-popup>
  </div>
</template>
<script>
import logo from '../Logo';
import {mapState} from 'vuex';
export default {
  props: {},
  components: {
    logo
  },
  data() {
    return {
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
      finished: false
    };
  },
  computed: {
    ...mapState(['isPhone']) //加载设备类型
  },

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
      this.loading = false;
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
        localStorage.setItem('heartColor', 'red');
        this.heartColor = 'red';
      }
    }
  },
  created() {
    if (process.client) {
      this.heartColor = localStorage.getItem('heartColor')
        ? localStorage.getItem('heartColor')
        : 'rgba(0,0,0,0.4)';
    }
  },
  mounted() {}
};
</script>
<style scoped lang="less">
.left {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
}
.logo {
  width: 100px;
  height: auto;
  z-index: 9999;
}
.menu,
.icon {
  font-size: 25px;
}
</style>