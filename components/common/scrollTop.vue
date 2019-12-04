<template>
  <div class="scrollTop" @click="scrollTop">
    <div class="box">
      <van-icon size="22" name="arrow-up" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/color.less');
.scrollTop {
  position: fixed;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  right: 0px;
  width: 40px;
  cursor: pointer;
  height: 40px;
  border: 1px solid @color-border-base;
  z-index: 99999;
}
@media screen and(max-width: 720px) {
  .scrollTop {
    display: none;
  }
}
</style>
