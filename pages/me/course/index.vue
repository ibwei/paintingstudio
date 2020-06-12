<template>
  <div class="me-subwrap">
    <van-empty description="暂无课程" />
    <van-button @click="navBack">返回</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    navBack() {
      this.$router.push({ path: '/me' });
    }
  }
};
</script>

<style lang="less" scoped>
.me-subwrap {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
