<template>
  <div class="me-info">
    <van-button @click="logout">退出</van-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations(['changeIsLogin']),
    logout() {
      console.log('hah');
      localStorage.removeItem('token');
      this.changeIsLogin(false);
      this.$router.push({ path: '/me' });
    }
  }
};
</script>

<style lang="less" scoped>
.me-info {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
