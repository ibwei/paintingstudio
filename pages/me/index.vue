<template>
  <div>
    <div class="avatar-area">
      <van-image
        width="100"
        height="100"
        round
        style="position:relative;z-index:3"
        :src="user.avatar ? user.avatar : ''"
      />
      <span>{{ user.name ? user.name : '未登录' }}</span>
      <div class="bg"></div>
    </div>
    <van-row>
      <van-list finished-text="没有更多了">
        <van-cell v-for="item in list" :key="item.name" :title="item.name" />
      </van-list>
    </van-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  middleware: 'me',
  data() {
    return {
      list: [
        {
          name: '个人资料'
        },
        {
          name: '我的课程'
        },
        {
          name: '我的预约'
        },
        {
          name: '我的评论'
        }
      ]
    };
  },
  computed: {
    ...mapState(['user', 'isLogin'])
  },
  methods: {
    ...mapMutations(['changeLoginDialogShow'])
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
