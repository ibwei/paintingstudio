<template>
  <div class="works-wrap">
    <carasel></carasel>
    <recruitment />
    <span>works</span>
    <span>hello,{{ userName }}</span>
    <a-button type="primary">按钮</a-button>
    <span class="icon iconfont">&#xe716;</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import carasel from '../../components/works/carousel';
import recruitment from '../../components/works/recruitment';
export default {
  components: {
    carasel,
    recruitment
  },
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
