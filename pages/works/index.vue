<template>
  <div class="works-wrap">
    <span>works</span>
    <span>hello,{{ userName }}</span>
    <a-button type="primary">按钮</a-button>
    <span class="icon iconfont">&#xe716;</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['userName'])
  }
};
</script>

<style scoped lang="less">
@import url('../../assets/css/index.less');
.works-wrap {
  color: @color-brand;
}
</style>
