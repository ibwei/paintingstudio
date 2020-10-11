<template>
  <div class="error">
    <van-empty
      v-if="error.statusCode == 404"
      image="network"
      description="页面不存在"
    />
    <van-empty v-else image="error" description="未知异常，请返回首页" />
    <van-button style="margin-top: 20px;" @click="navToHome">
      返回首页
    </van-button>
  </div>
</template>
<script>
export default {
  methods: {
    navToHome() {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less" scoped>
.error {
  display: flex;
  flex-flow: column nowrap;
  min-height: calc(100vh - 100px);
  justify-content: center;
  align-items: center;
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>
