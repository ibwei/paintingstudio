<template>
  <div>
    <div class="avatar-area">
      <van-image
        width="100"
        height="100"
        round
        style="position:relative;z-index:3"
        :src="
          user.avatar
            ? user.avatar
            : 'http://img.pinxianhs.com/20151121171107_zMZcy.jpeg'
        "
      />
      <span>{{ user.name ? user.name : '未登录' }}</span>
      <div class="bg"></div>
    </div>
    <van-row>
      <van-list finished-text="没有更多了">
        <van-cell
          v-for="item in list"
          :key="item.name"
          :icon="item.icon"
          arrow-direction="down"
          :is-link="true"
          @click="navTo(item.url)"
        >
          <template #title>
            <span class="custom-title">{{ item.name }}</span>
          </template>
        </van-cell>
      </van-list>
    </van-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  head() {
    return {
      title: '品贤画室 | 个人中心',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: '品贤个人中心,品贤画室,品贤'
        }
      ]
    };
  },
  middleware: 'me',
  data() {
    return {
      list: [
        {
          name: '个人资料',
          icon: 'user-o',
          url: '/me/info'
        },
        {
          name: '我的课程',
          icon: 'bill-o',
          url: '/me/course'
        },
        {
          name: '我的预约',
          icon: 'calender-o',
          url: '/me/book'
        },
        {
          name: '我的评论',
          icon: 'chat-o',
          url: '/me/comment'
        }
      ]
    };
  },
  computed: {
    ...mapState(['user', 'isLogin'])
  },
  methods: {
    navTo(url) {
      this.$router.push({ path: url });
    }
  }
};
</script>

<style lang="less" scoped>
.avatar-area {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 200px;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}
.bg {
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  z-index: 2;
  left: 0;
  background: url('../../assets/images/index/contact-background.png') no-repeat
    top center;
  background-size: 100% 100%;
  filter: blur(10px);
}
</style>
