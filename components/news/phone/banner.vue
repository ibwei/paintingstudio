<template>
  <div class="banner">
    <div class="left" @click="huitui">
      <van-icon name="arrow-left" />
    </div>
    <div class="right">
      <van-icon name="ellipsis" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    huitui () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
  padding: 2px 0px;
  position: fixed;
  top: 0px;
}
.van-icon {
  font-size: 22px;
}
.left {
  margin-left: 2px;
}
.right {
  margin-right: 5px;
}
.right .van-icon {
  font-size: 26px;
}
</style>
