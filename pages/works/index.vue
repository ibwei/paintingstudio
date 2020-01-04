<template>
  <div class="works-wrap">
    <carasel></carasel>
    <recruitment />
    <span>works</span>
    <span>hello,{{ userName }}</span>
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
</style>
